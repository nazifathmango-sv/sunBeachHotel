<template>
  <div
    class="relative max-w-4xl mx-auto px-4 sm:px-12 py-10"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="min-w-full flex justify-center"
        >
          <div
            class="w-full sm:w-4/5 bg-amber-50 rounded-7xl p-8 sm:p-10 text-center"
          >
            <p class="text-lg sm:text-xl italic font-serif text-gray-700 leading-relaxed">
              "{{ item.message }}"
            </p>
            <div class="w-16 h-1 bg-amber-300 mx-auto my-5"></div>
            <h3 class="text-lg font-bold font-serif text-gray-800">
              {{ item.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <button
      class="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-200 text-black text-2xl font-bold flex items-center justify-center shadow-md hover:bg-amber-300 transition cursor-pointer"
      aria-label="Témoignage précédent"
      @click="prev"
    >
      ‹
    </button>

    <button
      class="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-200 text-black text-2xl font-bold flex items-center justify-center shadow-md hover:bg-amber-300 transition cursor-pointer"
      aria-label="Témoignage suivant"
      @click="next"
    >
      ›
    </button>

    <div class="flex justify-center gap-2 mt-6">
      <button
        v-for="(_, i) in testimonials"
        :key="i"
        class="w-2.5 h-2.5 rounded-full transition-colors cursor-pointer"
        :class="i === current ? 'bg-amber-300' : 'bg-gray-300'"
        :aria-label="`Aller au témoignage ${i + 1}`"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Testimonial {
  name: string
  message: string
}

const props = defineProps<{
  testimonials: Testimonial[]
}>()

const current = ref(0)

let timer: number | null = null

function next() {
  current.value = (current.value + 1) % props.testimonials.length
}

function prev() {
  current.value = (current.value - 1 + props.testimonials.length) % props.testimonials.length
}

function goTo(index: number) {
  current.value = index
}

function startAutoplay() {
  stopAutoplay()

  timer = window.setInterval(() => {
    next()
  }, 5000)
}

function stopAutoplay() {
  if (timer !== null) {
    clearInterval(timer)

    timer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>
