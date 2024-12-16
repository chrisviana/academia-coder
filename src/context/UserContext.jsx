import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangeListerner } from '../utils/firebase'

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)

	const value = { currentUser, setCurrentUser }

	useEffect(() => {
		const unsibcribe = onAuthStateChangeListerner((user) => {
			setCurrentUser(user)
		})

		return unsibcribe
	}, [])

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
