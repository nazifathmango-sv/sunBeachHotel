<template>
  <div>
    <div
      class="h-screen bg-cover bg-center flex flex-col justify-center"
      :style="{ backgroundImage: `url(${ImFond1})`}"
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
          class="mt-6 text-lg sm:text-2xl font-serif  font-bold max-w-2xl leading-relaxed"
        >
         Profitez d'une expérience luxueuse alliant océan, confort et élégance.
          Votre séjour inoubliable commence ici.
        </p>
        <button
          @click="openReservation('Réservation SunBeach Hotel')"
          class="mt-8 cursor-pointer  bg-amber-200  text-black
          px-10 py-4 rounded-full font-bold text-lg border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
        >
          Réservez Maintenant
        </button>
        </div>
      </div>
    </div>
<div class="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-4xl text-center font-bold font-serif text-gray-500"
      >
      Nos Chambres
      </h2>
      <div class="flex justify-center mt-5">
        <div class="w-24 h-1 bg-amber-300"></div>
      </div>
      <p
        class="max-w-4xl mx-auto mt-8 text-center text-lg text-gray-600"
      >
      </p>
      <div class="mt-20 space-y-24">
  <div
    v-for="(chambre, index) in rooms"
    :key="chambre.id"
    class="relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[450px]"
    :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
  >
    <div
      class="absolute inset-0 bg-cover bg-center lg:hidden"
      :style="{ backgroundImage: `url(${chambre.image})` }"
    ></div>
    <div class="absolute inset-0 bg-black/50 lg:hidden"></div>
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
    <div class="hidden lg:block lg:w-1/2">
      <img
        :src="chambre.image"
        :alt="chambre.titre"
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
<div
  v-if="showModal"
  class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5"
>
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 relative">
    <h2 class="text-4xl font-serif font-bold text-center text-gray-800">
      {{ selectedRoom.titre }}
    </h2>

    <div class="w-24 h-1 bg-amber-300 mx-auto my-5"></div>
    <p class="text-gray-600 text-center leading-8">
      {{ selectedRoom.description }}
    </p>
    <div class="grid grid-cols-2 gap-5 mt-8">

      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="font-bold text-gray-700">Prix</h3>
        <p>{{ selectedRoom.prix }}</p>
      </div>

      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="font-bold text-gray-700">Nombres de personnes </h3>
        <p>{{ selectedRoom.personnes }}</p>
      </div>

      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="font-bold text-gray-700">Lit</h3>
        <p>{{ selectedRoom.lit }}</p>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="text-2xl font-bold mb-4 text-gray-800">
        Équipements
      </h3>

      <div class="grid grid-cols-2 gap-3">

        <div class="bg-amber-50 p-3 rounded-lg"> Climatisation</div>

        <div class="bg-amber-50 p-3 rounded-lg">Wi-Fi Gratuit</div>

        <div class="bg-amber-50 p-3 rounded-lg"> Smart TV</div>

      </div>
    </div>
    <div class="flex justify-center gap-4 mt-10">
      <button
        @click="openReservation(selectedRoom.titre)"
        class="bg-amber-200 px-8 py-3 rounded-full font-bold cursor-pointer border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
      >
        Réserver
      </button>

      <button
        @click="closeModal"
        class=" bg-amber-200 px-8 py-3 rounded-full font-bold cursor-pointer border-2 border-transparent transition hover:scale-105 hover:border-amber-200"
      >
        Fermer
      </button>

    </div>

  </div>
</div>

<ReservationPopup
  :isOpen="reservationOpen"
  :itemName="reservationItemName"
  @close="reservationOpen = false"
  @submit="handleReservationSubmit"
/>
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
import { useRouter, useRoute } from 'vue-router'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import ImFond1 from '@/assets/img/essai1.webp'
import Im1 from '@/assets/img/img_room2.webp'
import ReservationPopup from '@/components/helper/ReservationPopup.vue'
import ReservationStatusPopup from '@/components/helper/ReservationStatusPopup.vue'

const router = useRouter()
const route = useRoute()
const selectedRoom = ref<any>(null)
const showModal = ref(false)
const reservationOpen = ref(false)
const reservationItemName = ref('')
const statusOpen = ref(false)
const statusSuccess = ref(true)
const statusMessage = ref('')

const openModal = (room: any) => {
  selectedRoom.value = room
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const openReservation = (itemName: string) => {
  reservationItemName.value = itemName
  reservationOpen.value = true
}

const handleReservationSubmit = async (payload: { itemName: string; name: string; email: string; phone: string; details: string }) => {
  console.log('Soumission réservation:', payload)
  console.log('Firebase DB instance:', db)
  try {
    const reservationsCol = collection(db, 'reservations')
    console.log('Collection reference:', reservationsCol)
    const docRef = await addDoc(reservationsCol, {
      itemName: payload.itemName,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      details: payload.details,
      createdAt: serverTimestamp()
    })
    console.log('Réservation enregistrée, id:', docRef.id)
    reservationOpen.value = false
    showModal.value = false
    statusSuccess.value = true
    statusMessage.value = `Votre réservation pour "${payload.itemName}" a été enregistrée avec succès.`
    statusOpen.value = true
    window.alert(statusMessage.value)
  } catch (error) {
    console.error('Erreur Firebase:', error)
    reservationOpen.value = false
    statusSuccess.value = false
    statusMessage.value = error instanceof Error ? error.message : 'Impossible d\'enregistrer votre réservation pour le moment. Veuillez réessayer plus tard.'
    statusOpen.value = true
    window.alert(statusMessage.value)
  }
}

const openRoomFromQuery = () => {
  const roomId = route.query.roomId
  if (!roomId) return
  const id = Number(roomId)
  if (!Number.isFinite(id)) return
  const room = rooms.find((r) => r.id === id)
  if (room) {
    openModal(room)
  }
}

onMounted(() => {
  openRoomFromQuery()
})

watch(
  () => route.query.roomId,
  () => {
    if (route.name === 'rooms') {
      openRoomFromQuery()
    }
  }
)

const rooms = [
    {
  id: 1,
  titre: "Suite1",
  image: Im1,
  description: "Une suite spacieuse offrant une vue magnifique sur l'océan.",
  prix: "120 000 FCFA / nuit",
  personnes: "2 adultes",
  lit: "King Size",
  wifi: true,
  balcon: true
  },
  {
  id: 2,
  titre: "Suite2 ",
  image: Im1,
  description: "Une suite spacieuse offrant une vue magnifique sur l'océan.",
  prix: "120 000 FCFA / nuit",
  personnes: "2 adultes",
  lit: "King Size",
  wifi: true,
  balcon: true
},
  {
  id: 3,
  titre: "Suite3 ",
  image: Im1,
  description: "Une suite spacieuse offrant une vue magnifique sur l'océan.",
  prix: "120 000 FCFA / nuit",
  personnes: "2 adultes",
  lit: "King Size",
  wifi: true,
  balcon: true
},
 {
  id: 4,
  titre: "Suite4",
  image: Im1,
  description: "Une suite spacieuse offrant une vue magnifique sur l'océan.",
  prix: "120 000 FCFA / nuit",
  personnes: "2 adultes",
  lit: "King Size",
  wifi: true,
  balcon: true
},
  {
  id: 5,
  titre: "Suite5",
  image: Im1,
  description: "Une suite spacieuse offrant une vue magnifique sur l'océan.",
  prix: "120 000 FCFA / nuit",
  personnes: "2 adultes",
  lit: "King Size",
  wifi: true,
  balcon: true
},
   {
  id: 6,
  titre: "Suite6",
  image: Im1,
  description: "Une suite spacieuse offrant une vue magnifique sur l'océan.",
  prix: "120 000 FCFA / nuit",
  personnes: "2 adultes",
  lit: "King Size",
  wifi: true,
  balcon: true
}
]
</script>
