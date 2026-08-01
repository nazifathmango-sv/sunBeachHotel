<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" @click="$emit('close')">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 relative" @click.stop>
        <button
          type="button"
          @click="$emit('close')"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        >
          ×
        </button>

        <h2 class="text-3xl font-bold mb-2 text-gray-900">Réservation</h2>
        <p class="text-gray-600 mb-6">Remplissez vos informations et confirmez votre choix.</p>

        <div class="mb-6 rounded-2xl bg-amber-50 p-4 text-gray-700">
          <p class="font-semibold">Je souhaite réserver :</p>
          <div class="mt-3 grid gap-3 sm:grid-cols-2">
            <label
              v-for="option in itemOptions"
              :key="option"
              class="flex items-center gap-3 rounded-2xl border border-transparent bg-white px-4 py-3 cursor-pointer transition hover:border-amber-300"
            >
              <input
                type="radio"
                class="h-4 w-4 text-amber-600"
                :value="option"
                v-model="selectedItem"
              />
              <span class="text-sm font-semibold text-gray-800">{{ option }}</span>
            </label>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              v-model="name"
              type="text"
              placeholder="Votre nom"
              class="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-300"
              required
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="email@example.com"
                class="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-300"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                v-model="phone"
                type="tel"
                placeholder="+229 90 12 34 56"
                class="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-300"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Ce que je souhaite réserver</label>
            <textarea
              v-model="details"
              placeholder="Par exemple : chambre suite 1 pour 2 adultes, spa pour 2 personnes, dîner au restaurant..."
              class="mt-2 w-full min-h-[120px] rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-300"
              required
            />
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              class="w-full sm:w-auto bg-amber-200 px-8 py-3 rounded-full font-bold text-black transition hover:scale-105"
            >
              Confirmer
            </button>
            <button
              type="button"
              @click="$emit('close')"
              class="w-full sm:w-auto bg-gray-100 px-8 py-3 rounded-full font-bold text-gray-700 transition hover:scale-105"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  itemName: {
    type: String,
    default: ''
  },
  itemOptions: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', payload: { itemName: string; name: string; email: string; phone: string; details: string }): void
}>()

const selectedItem = ref<string>(props.itemName || '')

watch(
  () => props.itemName,
  (value) => {
    if (value) {
      selectedItem.value = value
    }
  }
)

watch(
  () => props.itemOptions,
  (options) => {
    if (options && options.length > 0 && !options.includes(selectedItem.value)) {
      selectedItem.value = options[0] ?? ''
    }
  },
  { immediate: true }
)

const itemOptions = computed(() => {
  return props.itemOptions.length > 0 ? props.itemOptions : [props.itemName || 'Réservation']
})

const name = ref('')
const email = ref('')
const phone = ref('')
const details = ref('')

const handleSubmit = () => {
  if (!name.value || !email.value || !phone.value || !details.value) {
    return
  }
  emit('submit', {
    itemName: selectedItem.value || props.itemName || 'Réservation',
    name: name.value,
    email: email.value,
    phone: phone.value,
    details: details.value
  })
  name.value = ''
  email.value = ''
  phone.value = ''
  details.value = ''
}
</script>
