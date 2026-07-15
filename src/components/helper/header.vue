<template>
  <div class="fixed top-0 left-0 w-full z-[100] bg-black/30 backdrop-blur-sm">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="rounded-b-3xl bg-amber-200 p-3 md:p-5 py-5 md:py-6 text-black cursor-pointer">
        <RouterLink to="/" @click="isOpen = false">
          SunBeach Hotel
        </RouterLink>
      </div>

      <!-- Desktop nav -->
      <div class="hidden md:flex gap-x-10 text-white text-lg font-serif">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/facilities">Services</RouterLink>
        <RouterLink to="/rooms">Chambres</RouterLink>
        <RouterLink to="/aboutUs">À Propos</RouterLink>
      </div>

      <!-- Burger button -->
      <button
        class="md:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
        aria-label="Ouvrir le menu"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span
          class="block h-0.5 w-7 bg-amber-200 rounded-full transition-all duration-300 origin-center"
          :class="isOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-0.5 w-7 bg-amber-200 rounded-full transition-all duration-300"
          :class="isOpen ? 'opacity-0' : 'opacity-100'"
        ></span>
        <span
          class="block h-0.5 w-7 bg-amber-200 rounded-full transition-all duration-300 origin-center"
          :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- Mobile nav -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="md:hidden fixed inset-0 top-0 h-screen w-screen bg-black/90 backdrop-blur-md flex items-center justify-center"
      >
        <nav class="flex flex-col items-center gap-y-8 font-serif">
          <RouterLink
            to="/"
            class="text-white text-3xl tracking-wide hover:text-amber-200 transition-colors"
            @click="isOpen = false"
          >
            Accueil
          </RouterLink>
          <RouterLink
            to="/facilities"
            class="text-white text-3xl tracking-wide hover:text-amber-200 transition-colors"
            @click="isOpen = false"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/rooms"
            class="text-white text-3xl tracking-wide hover:text-amber-200 transition-colors"
            @click="isOpen = false"
          >
            Chambres
          </RouterLink>
          <RouterLink
            to="/aboutUs"
            class="text-white text-3xl tracking-wide hover:text-amber-200 transition-colors"
            @click="isOpen = false"
          >
            À Propos
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>
