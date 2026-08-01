// Import standard de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// ÉTAPE INDISPENSABLE : Importer Firestore (base de données)
import { getFirestore } from "firebase/firestore";

// Vos clés de configuration Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
};

if (!firebaseConfig.projectId) {
  console.warn('Firebase projectId is manquant. Vérifie ton fichier .env ou tes variables d\'environnement.');
}

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

console.log('Firebase initialisé:', {
  projectId: firebaseConfig.projectId,
  databaseURL: firebaseConfig.databaseURL,
});

export { db };
