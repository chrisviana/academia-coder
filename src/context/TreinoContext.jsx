import React, { createContext, useState, useContext } from 'react'

// Criação do contexto com valores padrão
const WorkoutContext = createContext(undefined)

// Provedor do contexto para envolver componentes que necessitam de acesso ao plano de treino
export const WorkoutProvider = ({ children }) => {
	const [currentPlan, setCurrentPlan] = useState(null)

	const setPlan = (plan) => {
		setCurrentPlan(plan)
	}

	const clearPlan = () => {
		setCurrentPlan(null)
	}

	return (
		<WorkoutContext.Provider value={{ currentPlan, setPlan, clearPlan }}>
			{children}
		</WorkoutContext.Provider>
	)
}

// Hook para consumir o contexto
export const useWorkout = () => {
	const context = useContext(WorkoutContext)
	if (!context) {
		throw new Error('useWorkout must be used within a WorkoutProvider')
	}
	return context
}
