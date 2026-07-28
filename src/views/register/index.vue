<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import bgImage from '@/assets/img/img_fond1.webp'

const router = useRouter()
const route = useRoute()
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

const getRedirectTarget = () => {
  const redirect = route.query.redirect?.toString() || '/'
  const roomId = route.query.roomId?.toString()
  if (redirect === '/rooms' && roomId) {
    return { path: redirect, query: { roomId } }
  }
  return { path: redirect }
}

const register = async () => {
  error.value = ''
  success.value = ''
  loading.value = true
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email: userCredential.user.email,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
    })
    success.value = 'Compte créé avec succès, redirection en cours...'
    setTimeout(() => {
      router.push(getRedirectTarget())
    }, 900)
  } catch (e: any) {
    error.value = e.message || 'Erreur lors de la création du compte'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center"
    :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="w-[92%] max-w-6xl grid gap-8 lg:grid-cols-[1.5fr_1fr] p-6 md:p-10 bg-black/50 rounded-[32px] border border-white/10 backdrop-blur-xl shadow-2xl">
      <div class="flex flex-col justify-between gap-6 text-white">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full bg-amber-200/90 px-4 py-2 text-sm font-semibold text-black">SunBeach Hotel</span>
          <h1 class="mt-8 text-4xl md:text-5xl font-serif leading-tight">Inscription client</h1>
          <p class="mt-5 text-white/80 text-base md:text-lg max-w-xl">Créez votre compte pour gérer vos réservations et accéder à votre espace client.</p>
        </div>

        <div class="grid gap-4">
          <div class="rounded-3xl bg-white/10 p-5 border border-white/10 shadow-xl">
            <p class="text-amber-200 uppercase text-xs tracking-[0.24em]">Accès client</p>
            <p class="mt-3 text-white text-lg font-semibold">Créez un compte en quelques secondes.</p>
          </div>
          <div class="rounded-3xl bg-white/10 p-5 border border-white/10 shadow-xl">
            <p class="text-amber-200 uppercase text-xs tracking-[0.24em]">Réservation facile</p>
            <p class="mt-3 text-white text-lg font-semibold">Réservez vos chambres plus rapidement.</p>
          </div>
        </div>
      </div>

      <div class="rounded-[32px] bg-black/70 border border-white/10 p-8 md:p-10 shadow-2xl">
        <h2 class="text-3xl text-white font-serif mb-4">Créer un compte</h2>
        <p class="text-white/70 mb-8">Entrez vos informations pour commencer.</p>

        <form @submit.prevent="register" class="space-y-5">
          <div class="grid gap-2">
            <label class="text-white/70 text-sm">Email</label>
            <input v-model="email" type="email" placeholder="votre@email.com"
              class="w-full rounded-3xl border border-white/15 bg-white/10 px-5 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/30" />
          </div>

          <div class="grid gap-2">
            <label class="text-white/70 text-sm">Mot de passe</label>
            <input v-model="password" type="password" placeholder="Mot de passe"
              class="w-full rounded-3xl border border-white/15 bg-white/10 px-5 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/30" />
          </div>

          <div class="grid gap-3">
            <button type="submit" :disabled="loading"
              class="rounded-full bg-amber-200 py-3 text-black font-semibold transition hover:-translate-y-0.5">Créer mon compte</button>
          </div>

          <p v-if="success" class="text-sm text-emerald-300">{{ success }}</p>
          <p v-if="error" class="text-sm text-red-300">{{ error }}</p>
        </form>

        <div class="mt-8 border-t border-white/10 pt-6 text-sm text-white/70">
          <p>Vous avez déjà un compte ? <router-link :to="{ name: 'login', query: route.query }" class="text-amber-200 hover:underline">Connectez-vous</router-link>.</p>
        </div>
      </div>
    </div>
  </section>
</template>
