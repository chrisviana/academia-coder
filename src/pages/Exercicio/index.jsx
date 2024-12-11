import { useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { ContainerExericio, ContentExercicio } from './style'

export const Exercicio = () => {
	const [nome, setNome] = useState({})
	const [serie, setSerie] = useState(0)
	const [repeticoes, setRepeticoes] = useState(0)

	function salvarExercicio() {
		const exercicio = {
			nome,
			serie,
			repeticoes
		}

		localStorage.setItem('exercicio', JSON.stringify(exercicio))
	}

	return (
		<ContainerExericio>
			<h1>Cadastro de Exericio</h1>
			<ContentExercicio>
				<div>
					<label>Nome do exercicio</label>
					<Input
						type="text"
						onChange={(event) => setNome(event.target.value)}
						value={nome}
					/>
				</div>
				<div>
					<label>Serie</label>
					<Input
						type="number"
						onChange={(event) => setSerie(event.target.value)}
						value={serie}
					/>
				</div>
				<div>
					<label>Repeticoes</label>
					<Input
						type="number"
						onChange={(event) => setRepeticoes(event.target.value)}
						value={repeticoes}
					/>
				</div>
				<Button onClick={salvarExercicio}>Cadastrar</Button>
			</ContentExercicio>
		</ContainerExericio>
	)
}
