import { createContext, useEffect, useState } from 'react'
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut
} from 'firebase/auth'
import { app, auth } from '../utils/firebase'
import { setCookie } from 'nookies'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { destroyCookie } from 'nookies/dist'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		const auth = getAuth(app)
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email } = user
				setUser({ uid, email })
			} else {
				setUser(null)
			}
		})

		return () => unsubscribe()
	}, [])

	const signOutUser = () => {
		try {
			signOut(auth)
			destroyCookie(undefined, '@academiacoder.token')
			localStorage.removeItem('@academiacoder.token')
			navigate('/')
		} catch {
			toast.error('Erro ao deslogar')
		}
	}

	const signIn = async (email, password) => {
		try {
			const auth = getAuth(app)

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
				localStorage.setItem('@emailLogado', email)

				setUser({
					uid,
					email
				})

				toast.success('Logado com sucesso')
				navigate('/app')
			} else {
				toast.error('E-mail ou Senha inválidos')
			}
		} catch (err) {
			console.log(err)
			toast.error('Erro ao acessar', err)
		}
	}

	const authContextData = {
		user,
		signIn,
		signOutUser
	}

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider }
