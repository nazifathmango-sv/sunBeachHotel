<template>
  <footer class="bg-gray-800 text-white py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center sm:text-left"
      >
        <div class="space-y-4 sm:col-span-2 lg:col-span-1">
          <div class="text-2xl uppercase font-serif font-bold">
            Sunbeach Hotel
          </div>
          <div class="w-16 h-1 bg-amber-200 mx-auto sm:mx-0"></div>
          <p class="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Un séjour luxueux alliant océan, confort et élégance sur les côtes de Cotonou.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="font-serif font-bold text-lg tracking-wide">Navigation</h3>
          <div class="w-12 h-1 bg-amber-200 mx-auto sm:mx-0"></div>
          <div class="flex flex-col gap-3 text-sm text-gray-300">
            <RouterLink to="/" class="hover:text-amber-200 transition">
              Accueil
            </RouterLink>
            <RouterLink to="/facilities" class="hover:text-amber-200 transition">
              Services
            </RouterLink>
            <RouterLink to="/rooms" class="hover:text-amber-200 transition">
              Chambres
            </RouterLink>
            <RouterLink to="/aboutUs" class="hover:text-amber-200 transition">
              À Propos
            </RouterLink>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-serif font-bold text-lg tracking-wide">Contact</h3>
          <div class="w-12 h-1 bg-amber-200 mx-auto sm:mx-0"></div>
          <div class="space-y-3 text-sm text-gray-300">
            <p>+229 21 30 30 30</p>
            <p class="break-words">
              995C+3JM, Fidjrossè Calvaire, Cotonou, Bénin
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-serif font-bold text-lg tracking-wide">Suivez-nous</h3>
          <div class="w-12 h-1 bg-amber-200 mx-auto sm:mx-0"></div>
          <div class="flex flex-col gap-3 items-center sm:items-start">
            <a
              href="#"
              class="flex items-center gap-3 text-sm text-gray-300 hover:text-amber-200 transition"
            >
              <img :src="facebookIcon" alt="Facebook" class="w-6 h-6" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 text-sm text-gray-300 hover:text-amber-200 transition"
            >
              <img :src="twitterIcon" alt="Twitter" class="w-6 h-6" />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 text-sm text-gray-300 hover:text-amber-200 transition"
            >
              <img :src="instagramIcon" alt="Instagram" class="w-6 h-6" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
        2026 SunBeach Hotel. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import facebookIcon from '@/assets/icon/facebook.svg'
import twitterIcon from '@/assets/icon/twitter.svg'
import instagramIcon from '@/assets/icon/instagram.svg'
</script>
