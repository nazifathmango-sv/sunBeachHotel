<template>
  <div class="bg-gray-50">
    <div
      class="h-screen bg-cover bg-center flex items-center relative"
      :style="{ backgroundImage: `url(${ImFond})` }"
    >
      <div class="absolute inset-0 bg-black/"></div>
      <div class="relative z-10 px-6 sm:px-12 lg:px-20 text-white max-w-4xl">
        <p class="text-xl sm:text-3xl font-serif italic mb-3">BIENVENUE À</p>

        <h1 class="uppercase font-bold text-5xl sm:text-7xl lg:text-6xl font-serif tracking-wide">
          SunBeach Hotel
        </h1>
        <p class="mt-6 text-lg sm:text-2xl font-serif font-bold max-w-2xl leading-relaxed">
          Profitez d'une expérience luxueuse alliant océan, confort et élégance. Votre séjour
          inoubliable commence ici.
        </p>
        <button
          class="mt-8 cursor-pointer bg-amber-200 text-black px-10 py-4 rounded-full font-bold text-lg"
        >
          Réservez Maintenant
        </button>
      </div>
    </div>
    <div class="py-20 px-6">
      <h2 class="text-4xl text-center font-bold font-serif text-gray-500">Nos Installations</h2>
      <div class="flex justify-center mt-5">
        <div class="w-24 h-1 bg-amber-200"></div>
      </div>
      <p class="max-w-4xl mx-auto mt-8 text-center text-lg text-gray-600">
        Au SunBeach Hotel, chaque détail est pensé pour rendre votre séjour inoubliable. Profitez de
        nos chambres luxueuses, de notre spa relaxant, de nos restaurants, de nos espaces de
        divertissement, de nos salles de réception, de nos salles de jeux et de notre centre de
        fitness. Que vous soyez en famille, entre amis ou avec vos proches, nous créons des moments
        privilégiés pour chacun. Retour
      </p>
      <div class="mt-20 space-y-24">
       <div
    v-for="(chambre, index) in chambres"
    :key="chambre.id"
   class="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden"
     :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''"
>
          <div class="lg:w-1/2 p-10 flex flex-col items-center text-center">
            <h3 class="text-4xl font-bold italic font-serif mb-6 text-gray-800">
              {{ chambre.titre }}
            </h3>
            <div class="w-20 h-1 bg-amber-200 mb-6"></div>
            <p class="text-gray-600 text-lg leading-relaxed">
              {{ chambre.description }}
            </p>
            <button
              class="mt-8 bg-amber-200 cursor-pointer px-8 py-3 rounded-full text-black font-bold shadow-md"
            >
              Explorer
            </button>
          </div>
          <div class="lg:w-1/2">
            <img :src="chambre.image" :alt="chambre.titre" class="w-full h-[450px] object-cover" />
          </div>
        </div>
      </div>
      <h2 class="text-4xl mt-20 text-center font-serif font-bold text-gray-700">Nos Témoignages</h2>
      <div class="flex justify-center mt-5">
        <span class="w-20 h-1 bg-amber-200"></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImFond from '@/assets/img/Img3.webp'
import Img5 from '@/assets/img/room_1.webp'
import spa from '@/assets/img/img_spa3.webp'
import jeu from '@/assets/img/img_jeu1.webp'
import Img1 from '@/assets/img/img_manger2.webp'
import Img2 from '@/assets/img/img_fete1.webp'
import Img3 from '@/assets/img/Sport1.webp'
import Img4 from '@/assets/img/Boite1.webp'
const chambres = [
  {
    id: 1,
    titre: 'Chambres',
    image: Img5,
    description:
      'Découvrez des espaces chaleureux et raffinés où chaque détail a été imaginé pour vous offrir un séjour paisible. Entre élégance, confort et tranquillité, profitez d’un véritable havre de repos après chaque journée.',
  },

  {
    id: 2,
    titre: 'Restaurants',
    image: Img1,
    description:
      'Plus qu’un simple repas, nos restaurants sont des lieux de rencontre et de partage où chaque instant devient un souvenir. Profitez d’une cuisine savoureuse dans un cadre chaleureux avec votre famille, vos amis ou vos proches.',
  },
  {
    id: 3,
    titre: 'Salle de Réception',
    image: Img2,
    description:
      'Notre salle de fête est un espace élégant conçu pour accueillir vos moments importants : mariages, anniversaires, réceptions et célébrations. Chaque événement devient une expérience unique.',
  },
  {
    id: 4,
    titre: 'Boite de Nuit ',
    image: Img4,
    description:
      'Découvrez un espace de divertissement où musique, élégance et convivialité se rencontrent. Profitez d’une ambiance exceptionnelle pour prolonger vos soirées.',
  },
  {
    id: 5,
    titre: 'Spa',
    image: spa,
    description:
      'Offrez-vous un moment de détente dans notre espace spa. Entre soins relaxants, ambiance chaleureuse et bien-être, profitez d’une expérience unique dédiée à votre relaxation.',
  },
  {
    id: 6,
    titre: 'Salle de Jeux',
    image: jeu,
    description:
      'Notre salle de jeux offre aux enfants un espace sécurisé et amusant. Pendant qu’ils profitent de leurs activités, les parents peuvent partager un moment calme et agréable.',
  },
  {
    id: 7,
    titre: 'Salle de Sport',
    image: Img3,
    description:
      'Gardez votre équilibre et votre énergie grâce à notre salle de sport moderne. Un espace pensé pour votre bien-être, votre forme et votre confort.',
  },
]
</script>
