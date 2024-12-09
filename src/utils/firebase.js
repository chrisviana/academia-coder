import { initializeApp } from 'firebase/app'
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCw9HAgYmq_FOdaUaN0lp9KgiVlB_Gf3tM',
	authDomain: 'academia-coder.firebaseapp.com',
	projectId: 'academia-coder',
	storageBucket: 'academia-coder.firebasestorage.app',
	messagingSenderId: '522306882630',
	appId: '1:522306882630:web:ae26ee0deb4fba0e89ce47'
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const signInAuthUserWithEmailPassword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListerner = (callback) =>
	onAuthStateChanged(auth, callback)
