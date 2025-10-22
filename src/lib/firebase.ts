import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_LOGIN_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_LOGIN_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_LOGIN_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_LOGIN_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_LOGIN_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_LOGIN_MEASUREMENT_ID,
}
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)

export { auth, db, storage }
