import { createContext } from 'react'
import { app } from '../utils/firebase'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { toast } from 'react-toastify'
const GrupoContext = createContext({})

const GrupoProvider = ({ children }) => {
	const firestore = getFirestore(app)

	const saveGrupo = async (infoGrupo) => {
		try {
			await addDoc(collection(firestore, 'grupos'), infoGrupo)
			toast.success('Grupo cadastrado com sucesso')
			getGrupo()
		} catch (error) {
			toast.error('Erro ao cadastrar grupo', error.code)
		}
	}

	const getGrupo = async () => {
		const grupoCollection = collection(firestore, 'grupos')
		const grupoSnapshot = await getDocs(grupoCollection)
		const grupoList = grupoSnapshot.docs.map((doc) => doc.data())
		return grupoList
	}

	const value = { saveGrupo }

	return <GrupoContext.Provider value={value}>{children}</GrupoContext.Provider>
}

export { GrupoContext, GrupoProvider }
