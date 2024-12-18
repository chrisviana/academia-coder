import { useContext, useEffect, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { ContainerExericio, ContentExercicio } from './style'
import { GrupoContext } from '../../context/GrupoContext'
import { ExercicioContext } from '../../context/ExericicioContext'
import { toast } from 'react-toastify'

export const Exercicio = () => {
	const { getGrupo } = useContext(GrupoContext)
	const { getExercicio, saveExercicio } = useContext(ExercicioContext)

	const [nome, setNome] = useState('')
	const [grupos, setGrupos] = useState()
	const [grupoId, setGrupoId] = useState('')
	const [exericios, setExercicios] = useState()

	console.log(exericios)
	useEffect(() => {
		getExercicio().then((exercicioList) => {
			setExercicios(exercicioList)
		})
	}, [])

	useEffect(() => {
		getGrupo().then((grupoList) => {
			setGrupos(grupoList)
		})
	}, [])

	async function salvarExercicio() {
		if (!nome || !grupoId) {
			toast.warning('Por favor, preencha todos os campos')
			return
		}

		const novoExercicio = {
			nome,
			grupoId
		}

		await saveExercicio(novoExercicio)
	}

	return (
		<ContainerExericio>
			<h1>Cadastro de Exericio</h1>
			<ContentExercicio>
				<div>
					<label>Grupo</label>
					<select value={grupoId} onChange={(e) => setGrupoId(e.target.value)}>
						{grupos?.map((grupo) => (
							<option key={grupo.id} value={grupo.id}>
								{grupo.descricao}
							</option>
						))}
					</select>
				</div>
				<div>
					<label>Nome do exercicio</label>
					<Input
						type="text"
						onChange={(event) => setNome(event.target.value)}
						value={nome}
					/>
				</div>

				<Button onClick={salvarExercicio}>Cadastrar</Button>
			</ContentExercicio>
		</ContainerExericio>
	)
}
