<template>
  <footer class="bg-gray-800 text-white p-6 sm:p-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-2xl sm:text-3xl uppercase font-serif font-bold mb-8 text-center">
        Sunbeach Hotel
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left"
      >
        <div class="space-y-3 text-sm sm:text-base">
          <p>+229 21 30 30 30</p>
          <p class="break-words">
            995C+3JM, Fidjrossè Calvaire, Cotonou, Bénin
          </p>
          <p>
            2026 SunBeach Hotel. Tous droits réservés.
          </p>
        </div>
        <div class="space-y-3 text-sm sm:text-base flex flex-col">
          <RouterLink
            to="/"
            class="hover:text-gray-300 transition"
          >
            Accueil
          </RouterLink>
          <RouterLink
            to="/Services"
            class="hover:text-gray-300 transition"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/Chambres"
            class="hover:text-gray-300 transition"
          >
            Chambres
          </RouterLink>
          <RouterLink
            to="/À Propos"
            class="hover:text-gray-300 transition"
          >
            À Propos
          </RouterLink>
        </div>
        <div class="space-y-4 flex flex-col items-center sm:items-start">

          <div class="flex items-center gap-3">
            <img
              :src="facebookIcon"
              alt="Facebook"
              class="w-7 h-7 sm:w-8 sm:h-8"
            />
            <span>Facebook</span>
          </div>
          <div class="flex items-center gap-3">
            <img
              :src="twitterIcon"
              alt="Twitter"
              class="w-7 h-7 sm:w-8 sm:h-8"
            />
            <span>Twitter</span>
          </div>
          <div class="flex items-center gap-3">
            <img
              :src="instagramIcon"
              alt="Instagram"
              class="w-7 h-7 sm:w-8 sm:h-8"
            />
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import facebookIcon from '@/assets/icon/facebook.svg'
import twitterIcon from '@/assets/icon/twitter.svg'
import instagramIcon from '@/assets/icon/instagram.svg'
</script>
