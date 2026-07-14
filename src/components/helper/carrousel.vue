<template>
  <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="viewport">
      <div class="track" :style="trackStyle">
        <div class="slide" v-for="(item, index) in testimonials" :key="index">
          <div class="card">
            <p class="message">"{{ item.message }}"</p>
            <h3>
              {{ item.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <button class="nav prev" @click="prev">‹</button>

    <button class="nav next" @click="next">›</button>

    <div class="dots">
      <button
        v-for="(_, i) in testimonials"
        :key="i"
        :class="{ active: i === current }"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface Testimonial {
  name: string
  message: string
}

const props = defineProps<{
  testimonials: Testimonial[]
}>()

const current = ref(0)

let timer: number | null = null

const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
}))

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
<style coped>
.carousel {
  position: relative;
  overflow: hidden;
  padding: 40px 0;
}

.viewport {
  overflow: hidden;
}

.track {
  display: flex;
  transition: transform 1s ease;
}

.slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
}

.card {
  width: 70%;
  padding: 35px;
  background:rgb(243, 234, 180);
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.message {
  font-size: 18px;
  font-style: italic;
  line-height: 2;
}

.card h3 {
  margin-top: 20px;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border:none;

  cursor: pointer;
}

.prev {
  left: 15px;
  font-size: 40px;
  font-weight: 900;
}

.next {
  right: 15px;
  font-size: 40px;
  font-weight: 900;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #ccc;
}

.dots button.active {
  background: black;
}
</style>
