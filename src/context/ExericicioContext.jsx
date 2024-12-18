import { createContext } from 'react'
import { app } from '../utils/firebase'
import { toast } from 'react-toastify'
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	getDocs,
	deleteDoc,
	updateDoc
} from 'firebase/firestore'

const ExercicioContext = createContext({})

const ExercicioProvaider = ({ children }) => {
	const firestore = getFirestore(app)

	const saveExercicio = async (infoExercicio) => {
		try {
			await addDoc(collection(firestore, 'exercicios'), infoExercicio)

			toast.success('Exercício cadastrado com sucesso')
		} catch (error) {
			toast.error('Erro ao salvar o exercício:', error)
		}
	}

	const getExercicio = async () => {
		const exercicioCollection = collection(firestore, 'exercicios')
		const exercicioSnapshot = await getDocs(exercicioCollection)
		const exercicioList = exercicioSnapshot.docs.map((doc) => doc.data())
		return exercicioList
	}

	const deleteExercicio = async (id) => {
		const exercicioRef = doc(firestore, 'exercicios', id)
		try {
			await deleteDoc(exercicioRef)
			toast.success('Exercício excluído com sucesso!')
		} catch (error) {
			toast.error('Erro ao excluir grupo:', error)
		}
	}

	const editarExercicio = async (id, infoExercicio) => {
		const exericioRef = doc(firestore, 'exercicios', id)
		try {
			await updateDoc(exericioRef, infoExercicio)
			toast.success('Exercício atualizado com sucesso!')
		} catch (error) {
			toast.error('Erro ao editar exericicio:', error)
		}
	}

	const authContextData = {
		saveExercicio,
		getExercicio,
		deleteExercicio,
		editarExercicio
	}

	return (
		<ExercicioContext.Provider value={authContextData}>
			{children}
		</ExercicioContext.Provider>
	)
}

export { ExercicioContext, ExercicioProvaider }
