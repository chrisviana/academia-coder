// Importando o hook que criamos

import { useWorkout } from '../../context/TreinoContext'

const WorkoutPlanDisplay = () => {
	const { currentPlan, clearPlan } = useWorkout()

	return (
		<div>
			{currentPlan ? (
				<div>
					<h2>Plano de Treino: {currentPlan.name}</h2>
					<ul>
						{currentPlan.exercises.map((exercise, index) => (
							<li key={index}>{exercise}</li>
						))}
					</ul>
					<button onClick={clearPlan}>Limpar Plano</button>
				</div>
			) : (
				<p>Nenhum plano de treino selecionado.</p>
			)}
		</div>
	)
}

export default WorkoutPlanDisplay
