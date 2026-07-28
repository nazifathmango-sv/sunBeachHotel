<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth, db } from '@/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import bgImage from '@/assets/img/img_fond1.webp'

const router = useRouter()
const route = useRoute()
const isAuthReady = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/')
    } else {
      isAuthReady.value = true
    }
    unsubscribe()
  })
})

const getRedirectTarget = () => {
  const redirect = route.query.redirect?.toString() || '/'
  const roomId = route.query.roomId?.toString()
  if (redirect === '/rooms' && roomId) {
    return { path: redirect, query: { roomId } }
  }
  return { path: redirect }
}

const navigateAfterSuccess = () => {
  const target = getRedirectTarget()
  setTimeout(() => {
    router.push(target)
  }, 900)
}

const login = async () => {
  error.value = ''
  success.value = ''
  loading.value = true
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email: userCredential.user.email,
      lastLogin: serverTimestamp(),
    }, { merge: true })
    success.value = 'Connexion réussie, redirection en cours...'
    navigateAfterSuccess()
  } catch (e: any) {
    error.value = e.message || 'Erreur de connexion'
  } finally {
    loading.value = false
  }
}

const register = async () => {
  error.value = ''
  success.value = ''
  loading.value = true
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    success.value = 'Compte créé avec succès, redirection en cours...'
    navigateAfterSuccess()
  } catch (e: any) {
    error.value = e.message || 'Erreur lors de la création du compte'
  } finally {
    loading.value = false
  }
}

const logout = async () => {
  await signOut(auth)
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
          <h1 class="mt-8 text-4xl md:text-5xl font-serif leading-tight">Bienvenue à votre espace client</h1>
          <p class="mt-5 text-white/80 text-base md:text-lg max-w-xl">Connectez-vous pour gérer vos réservations, découvrir nos services exclusifs et profiter d’une expérience personnalisée au cœur de Cotonou.</p>
        </div>

        <div class="grid gap-4">
          <div class="rounded-3xl bg-white/10 p-5 border border-white/10 shadow-xl">
            <p class="text-amber-200 uppercase text-xs tracking-[0.24em]">Service disponible</p>
            <p class="mt-3 text-white text-lg font-semibold">Accès rapide à toutes vos réservations.</p>
          </div>
          <div class="rounded-3xl bg-white/10 p-5 border border-white/10 shadow-xl">
            <p class="text-amber-200 uppercase text-xs tracking-[0.24em]">Hôtel de charme</p>
            <p class="mt-3 text-white text-lg font-semibold">Un séjour inoubliable avec un confort premium.</p>
          </div>
        </div>
      </div>

      <div class="rounded-[32px] bg-black/70 border border-white/10 p-8 md:p-10 shadow-2xl">
        <h2 class="text-3xl text-white font-serif mb-4">Connexion client</h2>
        <p class="text-white/70 mb-8">Entrez vos identifiants pour accéder à votre compte.</p>

        <div v-if="isAuthReady">
          <form @submit.prevent="login" class="space-y-5">
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

          <div class="grid gap-3 sm:grid-cols-2">
            <button type="submit" :disabled="loading"
              class="rounded-full bg-amber-200 py-3 text-black font-semibold transition hover:-translate-y-0.5">Se connecter</button>
            <router-link :to="{ name: 'register', query: route.query }"
              class="rounded-full border border-amber-200 py-3 text-center text-amber-200 transition hover:bg-amber-200 hover:text-black inline-flex items-center justify-center"
            >S'inscrire</router-link>
          </div>

            <p v-if="success" class="text-sm text-emerald-300">{{ success }}</p>
            <p v-if="error" class="text-sm text-red-300">{{ error }}</p>
          </form>
        </div>
        <div v-else class="text-white/70 text-center py-12">Chargement de l'état de connexion...</div>

        <div class="mt-8 border-t border-white/10 pt-6 text-sm text-white/70">
          <p>Pas encore de compte ? Inscrivez-vous en un clic.</p>
          <p class="mt-4 text-amber-200">Lien rapide: <span class="text-white">/login</span></p>
        </div>
      </div>
    </div>
  </section>
</template>
