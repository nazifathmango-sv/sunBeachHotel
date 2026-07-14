<template>
  <div>
    <div
      class="h-screen bg-cover bg-center flex flex-col justify-center"
      :style="{ backgroundImage: `url(${ImFond1})` }"
    >
     <div
        class="relative z-10 px-6 sm:px-12 lg:px-20 text-white max-w-4xl"
      >
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
          class="mt-8 cursor-pointer  bg-amber-200  text-black
          px-10 py-4 rounded-full font-bold text-lg"
        >
          Réservez Maintenant
        </button>
      </div>
    </div>
<div class="py-20 px-6">
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
          v-for="chambre in rooms"
          :key="chambre.id"
          class="flex flex-col lg:flex-row items-center gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden "
        >
          <div
            class="lg:w-1/2 p-10 flex flex-col items-center text-center"
          >
            <h3
              class="text-4xl font-bold italic font-serif mb-6 text-gray-800"
            >
              {{ chambre.titre }}
            </h3>
            <div class="w-20 h-1 bg-amber-300 mb-6"></div>
            <p
              class="text-gray-600 text-lg leading-relaxed"
            >
              {{ chambre.description }}
            </p>
            <button
              class="mt-8 bg-amber-200 cursor-pointer  px-8 py-3 rounded-full text-black font-bold hover:bg-amber-400 transition duration-300 hover:scale-105 shadow-md"
            >
              Explorer
            </button>
          </div>
          <div
            class="lg:w-1/2 "
          >
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
  </div>
</template>
<script setup lang="ts">
import ImFond1 from '@/assets/img/essai1.webp'
import Im1 from '@/assets/img/img_room2.webp'
const rooms = [
  {
     id: 1,
    titre: 'Rooms',
    image: Im1,
    description:
      "Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible."
  },
  {
 id: 1,
    titre: 'Rooms',
    image: Im1,
    description:
      "Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible."
  },
  {
     id: 1,
    titre: 'Rooms',
    image: Im1,
    description:
      "Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible."
  },
 {
    id: 1,
    titre: 'Rooms',
    image: Im1,
    description:
      "Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible."
  },
   {
     id: 1,
    titre: 'Rooms',
    image: Im1,
    description:
      "Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible."
  },
   {
     id: 1,
    titre: 'Rooms',
    image: Im1,
    description:
      "Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible."
  }
]


</script>
