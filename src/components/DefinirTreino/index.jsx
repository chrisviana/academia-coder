import { useWorkout } from '../../context/TreinoContext'

const WorkoutPlanSetter = () => {
	const { setPlan } = useWorkout()

	const handleSetPlan = () => {
		const newPlan = {
			id: 1,
			name: 'Plano de Treino Inicial',
			exercises: ['Agachamento', 'Flexão', 'Corrida']
		}
		setPlan(newPlan)
	}

	return <button onClick={handleSetPlan}>Definir Plano de Treino</button>
}

export default WorkoutPlanSetter
