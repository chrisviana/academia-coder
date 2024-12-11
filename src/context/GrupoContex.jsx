import { createContext } from 'react'
import { app } from '../utils/firebase'
import { toast } from 'react-toastify'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const GrupoContext = createContext({})

const GrupoProvaider = ({ children }) => {
	const firestore = getFirestore(app)

	const saveGrupo = async (infoGrupo) => {
		try {
			await addDoc(collection(firestore, 'grupos'), infoGrupo)
			toast.success('Grupo cadastrado com sucesso')
		} catch (error) {
			console.log(error)
			toast.error('Erro ao salvar o grupo:', error)
		}
	}

	const authContextData = {
		saveGrupo
	}

	return (
		<GrupoContext.Provider value={authContextData}>
			{children}
		</GrupoContext.Provider>
	)
}

export { GrupoContext, GrupoProvaider }
