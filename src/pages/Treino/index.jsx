import WorkoutPlanSetter from '../../components/DefinirTreino'
import WorkoutPlanDisplay from '../../components/ExibirTreino'
import { WorkoutProvider } from '../../context/TreinoContext'

export const Treino = () => {
	return (
		<WorkoutProvider>
			<div>
				<WorkoutPlanSetter />
				<WorkoutPlanDisplay />
			</div>
		</WorkoutProvider>
	)
}
