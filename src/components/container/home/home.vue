<template>
  <div class="overflow-x-hidden">
    <div
      class="h-screen bg-cover bg-center flex items-center relative"
      :style="{ backgroundImage: `url(${ImgFond})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>

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
          Vivez une expérience luxueuse entre océan, confort et élégance. Votre séjour inoubliable commence ici.
        </p>
        <button
          class="mt-8 cursor-pointer  bg-amber-200  text-black
          px-10 py-4 rounded-full font-bold text-lg"
        >
         Réservez Maintenant
        </button>
        </div>
      </div>
    </div>
    <div class="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-5xl text-center font-serif font-bold text-gray-700"
      >
        BIENVENUE
      </h2>
      <div class="flex justify-center mt-5">
        <span class="w-24 h-1 bg-amber-200 rounded"></span>
      </div>
      <p
        class="max-w-4xl mx-auto mt-8 text-center text-lg text-gray-600 leading-relaxed"
      >
        Découvrez un hôtel où chaque détail est pensé pour votre confort.
        Une atmosphère raffinée, des services d'exception et un cadre paisible
        pour un séjour inoubliable.
      </p>

    </div>
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 space-y-20">
      <div
      v-for="(chambre, index) in chambres"
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
          class="
          relative z-10
          lg:w-1/2
          flex flex-col justify-center items-center
          text-center
          p-10 lg:p-16
          "
        >
          <h3
            class="
            text-4xl
            font-serif
            italic
            font-bold
            text-white lg:text-gray-800
            "
          >
            {{ chambre.titre }}
          </h3>
          <div class="w-20 h-1 bg-amber-300 my-6"></div>
          <p
            class="
            text-white lg:text-gray-600
            text-lg
            leading-relaxed
            "
          >
            {{ chambre.description }}
          </p>
          <button
            class="mt-8 bg-amber-200 cursor-pointer  text-black px-10 py-3 rounded-full "
          >
          Explore Room
          </button>
        </div>
        <div class="hidden lg:block lg:w-1/2">

          <img
            :src="chambre.image" :alt="chambre.titre" class=" w-full h-[450px] object-cover   object-contain hover:scale-105 transition duration-700 "
          />
        </div>
      </div>
    </div>
    <div class="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 class="text-4xl text-center font-serif font-bold text-gray-700">
    Nos Témoignages
      </h2>
      <div class="flex justify-center mt-5">
        <span class="w-20 h-1 bg-amber-200"></span>
      </div>
      <carousel
        :testimonials="[
          {
            message:'Votre service est excellent, je suis très satisfait.',
            name:'Marie'
          },
          {
            message:'Une équipe professionnelle et à l’écoute.',
            name:'Paul'
          },
          {
            message:'Je recommande vivement votre hôtel.',
            name:'Aïcha'
          }
        ]"
      />
    </div>
  </div>
</template>



<script setup lang="ts">

import ImgFond from '@/assets/img/Img2.webp'
import ImgRoom1 from '@/assets/img/img_room1.webp'
import ImgRoom2 from '@/assets/img/Img.webp'


const chambres = [

{
id:1,
titre:'Dream Room',
description:
"Profitez d'une chambre élégante avec une vue magnifique sur l'océan Atlantique. Un espace pensé pour votre confort et votre tranquillité.",
image:ImgRoom1
},


{
id:2,
titre:'Ocean Room',
description:
"Réveillez-vous avec une vue exceptionnelle sur la mer et profitez d'une expérience unique dans un cadre luxueux.",
image:ImgRoom2
}

]

</script>
