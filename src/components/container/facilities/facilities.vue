<template>
  <div class="bg-gray-50">

    <!-- HERO -->
    <div
      class="h-screen bg-cover bg-center flex items-center relative"
      :style="{ backgroundImage: `url(${ImFond})` }"
    >

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-white">

        <div class="max-w-4xl">

          <p class="text-xl sm:text-3xl font-serif italic mb-3">
            BIENVENUE À
          </p>

          <h1 class="uppercase font-bold text-5xl sm:text-7xl lg:text-6xl font-serif tracking-wide">
            SunBeach Hotel
          </h1>


          <p class="mt-6 text-lg sm:text-2xl font-serif font-bold max-w-2xl leading-relaxed">
            Profitez d'une expérience luxueuse alliant océan, confort et élégance.
            Votre séjour inoubliable commence ici.
          </p>


          <button
            @click="openReservation('Service SunBeach Hotel')"
            class="mt-8 cursor-pointer bg-amber-200 text-black px-10 py-4 rounded-full font-bold text-lg border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
          >
            Réservez Maintenant
          </button>

        </div>

      </div>

    </div>



    <!-- SERVICES -->

    <div class="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">


      <h2 class="text-4xl text-center font-bold font-serif text-gray-500">
        Nos Installations
      </h2>


      <div class="flex justify-center mt-5">
        <div class="w-24 h-1 bg-amber-200"></div>
      </div>



      <p class="max-w-4xl mx-auto mt-8 text-center text-lg text-gray-600">
        Découvrez l'ensemble des prestations proposées par SunBeach Hotel.
        Chaque espace est pensé pour rendre votre séjour unique.
      </p>



      <div
        v-if="services.length === 0"
        class="text-center mt-20 text-gray-500"
      >
        Aucun service disponible pour le moment.
      </div>




      <div class="mt-20 space-y-24">


        <div
          v-for="(service,index) in services"
          :key="service.id"
          class="relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[450px]"
          :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
        >



          <!-- IMAGE MOBILE -->

          <div
            class="absolute inset-0 bg-cover bg-center lg:hidden"
            :style="{backgroundImage:`url(${service.image})`}"
          ></div>


          <div class="absolute inset-0 bg-black/50 lg:hidden"></div>




          <!-- CONTENU -->

          <div class="relative z-10 lg:w-1/2 p-10 flex flex-col items-center text-center">


            <h3
              class="text-4xl font-bold italic font-serif mb-6 text-white lg:text-gray-800"
            >
              {{ service.titre }}
            </h3>



            <div class="w-20 h-1 bg-amber-200 mb-6"></div>



            <p class="text-white lg:text-gray-600 text-lg leading-relaxed">
              {{ service.description }}
            </p>



            <button
              @click="openReservation(service.titre)"
              class="mt-8 bg-amber-200 cursor-pointer px-8 py-3 rounded-full text-black font-bold shadow-md border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
            >
              Réserver
            </button>


          </div>





          <!-- IMAGE DESKTOP -->

          <div class="hidden lg:block lg:w-1/2">

            <img
              :src="service.image"
              :alt="service.titre"
              class="w-full h-[450px] object-cover"
            />

          </div>


        </div>


      </div>




      <h2 class="text-4xl mt-20 text-center font-serif font-bold text-gray-700">
        Nos Témoignages
      </h2>


      <div class="flex justify-center mt-5">
        <span class="w-20 h-1 bg-amber-200"></span>
      </div>


    </div>




    <ReservationPopup
      :isOpen="reservationOpen"
      :itemName="reservationItemName"
      @close="reservationOpen=false"
      @submit="handleReservationSubmit"
    />


    <ReservationStatusPopup
      :isOpen="statusOpen"
      :success="statusSuccess"
      :message="statusMessage"
      @close="statusOpen=false"
    />


  </div>
</template>
<script setup lang="ts">

import { ref, onMounted } from 'vue'
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore'

import { db } from '@/firebase'

import ImFond from '@/assets/img/Img3.webp'

import ReservationPopup from '@/components/helper/ReservationPopup.vue'
import ReservationStatusPopup from '@/components/helper/ReservationStatusPopup.vue'


interface Service {

  id:number

  titre:string

  image:string

  description:string

  icon:string

  categorie?:string

  info?:string

  horaires?:string

  caracteristiques?:string[]

  docId?:string

}




// Tous les services venant de Firebase

const services = ref<Service[]>([])





// Réservation

const reservationOpen = ref(false)

const reservationItemName = ref('')



const statusOpen = ref(false)

const statusSuccess = ref(true)

const statusMessage = ref('')






/**
 * Récupération des services Firebase
 */

onMounted(()=>{


  onSnapshot(
    collection(db,'services'),
    (snapshot)=>{


      services.value = snapshot.docs.map((firestoreDoc)=>{


        const data = firestoreDoc.data()



        return {

          id:data.id,

          titre:data.titre,

          image:data.image,

          description:data.description,

          icon:data.icon,

          categorie:data.categorie,

          info:data.info,

          horaires:data.horaires,

          caracteristiques:data.caracteristiques || [],

          docId:firestoreDoc.id

        }


      })


    }

  )


})







/**
 * Ouvrir réservation
 */

const openReservation = (itemName:string)=>{


  reservationItemName.value=itemName

  reservationOpen.value=true


}








/**
 * Enregistrer réservation
 */

const handleReservationSubmit = async(
payload:{
 itemName:string
 name:string
 email:string
 phone:string
 details:string
}

)=>{


try{


const reservationsCol = collection(
db,
'reservations'
)



await addDoc(
reservationsCol,
{


itemName:payload.itemName,

name:payload.name,

email:payload.email,

phone:payload.phone,

details:payload.details,

createdAt:serverTimestamp()


})



reservationOpen.value=false



statusSuccess.value=true


statusMessage.value =
`Votre réservation pour "${payload.itemName}" a été enregistrée avec succès.`



statusOpen.value=true



}



catch(error){


console.error(
"Erreur Firebase :",
error
)



reservationOpen.value=false



statusSuccess.value=false


statusMessage.value =
"Impossible d'enregistrer votre réservation pour le moment."



statusOpen.value=true



}



}



</script>
