<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" @click="$emit('close')">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative" @click.stop>
        <button
          type="button"
          @click="$emit('close')"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        >
          ×
        </button>

        <div class="text-center">
          <div
            :class="{
              'bg-emerald-100 text-emerald-800': success,
              'bg-red-100 text-red-800': !success
            }"
            class="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full p-4"
          >
            <span class="text-3xl font-bold">{{ success ? '✓' : '!' }}</span>
          </div>
          <h2 class="text-2xl font-bold mb-2 text-gray-900">{{ success ? 'Réservation effectuée' : 'Erreur de réservation' }}</h2>
          <p class="text-gray-600 mb-6">{{ message }}</p>
          <div class="flex justify-center">
            <button
              type="button"
              @click="$emit('close')"
              class="bg-amber-200 px-8 py-3 rounded-full font-bold text-black transition hover:scale-105"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
  success: {
    type: Boolean,
    default: true
  },
  message: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['close'])
</script>
