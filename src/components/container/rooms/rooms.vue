<template>
  <div>

    <!-- HERO -->
    <div
      class="h-screen bg-cover bg-center flex flex-col justify-center"
      :style="{ backgroundImage: `url(${ImFond1})` }"
    >
      <div
        class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-white"
      >
        <div class="max-w-4xl">

          <p class="text-xl sm:text-3xl font-serif italic mb-3">
            BIENVENUE À
          </p>

          <h1
            class="uppercase font-bold text-5xl sm:text-7xl lg:text-6xl font-serif tracking-wide"
          >
            SunBeach Hotel
          </h1>

          <p
            class="mt-6 text-lg sm:text-2xl font-serif font-bold max-w-2xl leading-relaxed"
          >
            Profitez d'une expérience luxueuse alliant océan, confort et élégance.
            Votre séjour inoubliable commence ici.
          </p>

          <button
            @click="openReservation('Réservation SunBeach Hotel')"
            class="mt-8 cursor-pointer bg-amber-200 text-black px-10 py-4 rounded-full font-bold text-lg border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
          >
            Réservez Maintenant
          </button>

        </div>
      </div>
    </div>


    <!-- CHAMBRES -->

    <div class="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      <h2 class="text-4xl text-center font-bold font-serif text-gray-500">
        Nos Chambres
      </h2>

      <div class="flex justify-center mt-5">
        <div class="w-24 h-1 bg-amber-300"></div>
      </div>


      <p class="max-w-4xl mx-auto mt-8 text-center text-lg text-gray-600">
        Découvrez nos chambres disponibles et profitez d'un séjour confortable
        dans un cadre élégant.
      </p>


      <div class="mt-20 space-y-24">


        <div
          v-for="(chambre,index) in rooms"
          :key="chambre.docId || chambre.id"
          class="relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[450px]"
          :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
        >


          <!-- IMAGE MOBILE -->

          <div
            class="absolute inset-0 bg-cover bg-center lg:hidden"
            :style="{ backgroundImage:`url(${chambre.image})` }"
          ></div>


          <div class="absolute inset-0 bg-black/50 lg:hidden"></div>



          <!-- TEXTE -->

          <div
            class="relative z-10 lg:w-1/2 p-10 flex flex-col items-center text-center"
          >

            <h3
              class="text-4xl font-bold italic font-serif mb-6 text-white lg:text-gray-800"
            >
              {{ chambre.titre }}
            </h3>


            <div class="w-20 h-1 bg-amber-300 mb-6"></div>


            <p
              class="text-white lg:text-gray-600 text-lg leading-relaxed"
            >
              {{ chambre.description }}
            </p>



            <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">


              <button
                @click="openModal(chambre)"
                class="bg-amber-200 text-black font-bold px-8 py-3 rounded-full cursor-pointer border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
              >
                VOIR PLUS
              </button>



              <button
                @click="openReservation(chambre.titre)"
                class="bg-amber-200 text-black font-bold px-8 py-3 rounded-full cursor-pointer border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
              >
                Réserver
              </button>


            </div>


          </div>




          <!-- IMAGE DESKTOP -->

          <div class="hidden lg:block lg:w-1/2">

            <img
              :src="chambre.image"
              :alt="chambre.titre"
              class="w-full h-[450px] object-cover"
            />

          </div>



        </div>


      </div>



      <h2
        class="text-4xl mt-20 text-center font-serif font-bold text-gray-700"
      >
        Nos Témoignages
      </h2>


      <div class="flex justify-center mt-5">

        <span class="w-20 h-1 bg-amber-200"></span>

      </div>


    </div>
    <!-- MODAL DETAIL CHAMBRE -->

    <div
      v-if="showModal && selectedRoom"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5"
    >

      <div
        class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 relative"
      >

        <h2
          class="text-4xl font-serif font-bold text-center text-gray-800"
        >
          {{ selectedRoom.titre }}
        </h2>


        <div class="w-24 h-1 bg-amber-300 mx-auto my-5"></div>


        <p
          class="text-gray-600 text-center leading-8"
        >
          {{ selectedRoom.description }}
        </p>



        <!-- INFORMATIONS -->

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">


          <div class="bg-gray-100 rounded-xl p-4">

            <h3 class="font-bold text-gray-700">
              Tarif
            </h3>

            <p>
              {{ selectedRoom.info || 'Non renseigné' }}
            </p>

          </div>



          <div class="bg-gray-100 rounded-xl p-4">

            <h3 class="font-bold text-gray-700">
              Horaires
            </h3>

            <p>
              {{ selectedRoom.horaires || 'Non renseigné' }}
            </p>

          </div>


        </div>




        <!-- CARACTERISTIQUES -->

        <div class="mt-8">


          <h3
            class="text-2xl font-bold mb-4 text-gray-800"
          >
            Caractéristiques
          </h3>



          <div
            v-if="selectedRoom.caracteristiques?.length"
            class="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >

            <div
              v-for="caracteristique in selectedRoom.caracteristiques"
              :key="caracteristique"
              class="bg-amber-50 p-3 rounded-lg"
            >

              {{ caracteristique }}

            </div>


          </div>



          <p
            v-else
            class="text-gray-500"
          >
            Aucune caractéristique disponible.
          </p>



        </div>





        <!-- BOUTONS -->

        <div
          class="flex justify-center gap-4 mt-10"
        >


          <button
            @click="openReservation(selectedRoom.titre)"
            class="bg-amber-200 px-8 py-3 rounded-full font-bold cursor-pointer border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
          >

            Réserver

          </button>




          <button
            @click="closeModal"
            class="bg-amber-200 px-8 py-3 rounded-full font-bold cursor-pointer border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
          >

            Fermer

          </button>


        </div>



      </div>


    </div>





    <!-- POPUP RESERVATION -->

    <ReservationPopup
      :isOpen="reservationOpen"
      :itemName="reservationItemName"
      @close="reservationOpen = false"
      @submit="handleReservationSubmit"
    />



    <!-- POPUP STATUT -->

    <ReservationStatusPopup
      :isOpen="statusOpen"
      :success="statusSuccess"
      :message="statusMessage"
      @close="statusOpen = false"
    />


  </div>

</template>
<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore'

import { db } from '@/firebase'

import ImFond1 from '@/assets/img/essai1.webp'

import ReservationPopup from '@/components/helper/ReservationPopup.vue'
import ReservationStatusPopup from '@/components/helper/ReservationStatusPopup.vue'



const route = useRoute()



interface Room {

  id:number

  titre:string

  image:string

  description:string

  info?:string

  horaires?:string

  categorie:string

  icon:string

  caracteristiques:string[]

  docId?:string

}





// Liste des chambres récupérées depuis services

const rooms = ref<Room[]>([])



// Chambre sélectionnée dans le modal

const selectedRoom = ref<Room | null>(null)

const showModal = ref(false)



// Réservation

const reservationOpen = ref(false)

const reservationItemName = ref('')



// Statut réservation

const statusOpen = ref(false)

const statusSuccess = ref(true)

const statusMessage = ref('')






/**
 * Récupération des services catégorie chambre
 */

onMounted(()=>{


  onSnapshot(
    collection(db,'services'),

    (snapshot)=>{


      rooms.value = snapshot.docs

      .map((firestoreDoc)=>{


        const data = firestoreDoc.data()



        return {

          id:data.id,

          titre:data.titre,

          image:data.image,

          description:data.description,

          info:data.info,

          horaires:data.horaires,

          categorie:data.categorie,

          icon:data.icon,

          caracteristiques:data.caracteristiques || [],

          docId:firestoreDoc.id

        }


      })

      // IMPORTANT :
      // On garde uniquement les services créés comme chambre

      .filter(
         (service)=>service.icon === 'bed'
      )


    }


  )


})








/**
 * Ouvrir le détail d'une chambre
 */

const openModal = (room:Room)=>{

  selectedRoom.value = room

  showModal.value = true

}





const closeModal = ()=>{

  showModal.value = false

}








/**
 * Ouvrir réservation
 */

const openReservation = (itemName:string)=>{


  reservationItemName.value = itemName

  reservationOpen.value = true


}








/**
 * Enregistrer réservation Firebase
 */

const handleReservationSubmit = async(payload:{
  itemName:string
  name:string
  email:string
  phone:string
  details:string
})=>{


try{


  await addDoc(
    collection(db,'reservations'),

    {

      itemName:payload.itemName,

      name:payload.name,

      email:payload.email,

      phone:payload.phone,

      details:payload.details,

      createdAt:serverTimestamp()

    }

  )



  reservationOpen.value=false

  showModal.value=false



  statusSuccess.value=true


  statusMessage.value =
  `Votre réservation pour "${payload.itemName}" a été enregistrée avec succès.`



  statusOpen.value=true



}

catch(error){


console.error(
  "Erreur réservation :",
  error
)



reservationOpen.value=false


statusSuccess.value=false


statusMessage.value =
"Impossible d'enregistrer votre réservation."


statusOpen.value=true



}


}








/**
 * Ouvrir une chambre depuis l'URL
 * Exemple : /rooms?roomId=11
 */

const openRoomFromQuery = ()=>{


const roomId = route.query.roomId


if(!roomId)
return




const id = Number(roomId)



if(!Number.isFinite(id))
return





const room = rooms.value.find(
(r)=>r.id===id
)




if(room){

openModal(room)

}



}








watch(

()=>rooms.value,

()=>{

openRoomFromQuery()

},

{
deep:true
}

)







watch(

()=>route.query.roomId,

()=>{


if(route.name==='rooms'){

openRoomFromQuery()

}


}

)



</script>
