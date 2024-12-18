import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { app } from '../utils/firebase'
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'
import { destroyCookie, setCookie } from 'nookies'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const auth = getAuth(app)

	const navigate = useNavigate()

	useEffect(() => {
		const unsubcribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email } = user
				setUser({ uid, email })
			} else {
				setUser(null)
			}

			return () => unsubcribe()
		})
	}, [])

	const signIn = async (email, password) => {
		try {
			const response = await signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					return userCredential.user
				})
				.catch((error) => {
					return error
				})

			const { accessToken, uid } = response

			if (accessToken) {
				setCookie(undefined, '@academiacoder.token', accessToken, {
					maxAge: 60 * 60 * 24 * 30,
					path: '/'
				})

				localStorage.setItem('@academiacoder.token', accessToken)
				localStorage.setItem('@emailLogal', email)

				setUser({
					uid,
					email
				})

				toast.success('Logado com sucesso')
				navigate('/app')
			} else {
				toast.warning('E-mail ou Senha Invalidos')
			}
		} catch (error) {
			toast.error('Erro ao acessar o sistema.', error.code)
		}
	}

	const signOutUser = async () => {
		try {
			await signOut(auth)
			destroyCookie(undefined, '@academiacoder.token')
			localStorage.removeItem('@academiacoder.token')
			navigate('/')
		} catch {
			toast.error('Erro ao deslogar')
		}
	}
	const value = { user, signIn, signOutUser }
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
