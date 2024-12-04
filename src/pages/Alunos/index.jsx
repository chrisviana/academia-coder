import { useState, useEffect } from 'react'
import { Lista } from '../../components/Lista'
import { ModalCadastroDeAluno } from '../../components/ModalCadastroDeAluno'
import * as Style from './style'

export const Alunos = () => {
	const [infoAluno, setInfoAluno] = useState({})
	const [alunos, setAlunos] = useState([])

	useEffect(() => {
		const alunosExistentes = JSON.parse(localStorage.getItem('alunos')) || []
		setAlunos(alunosExistentes)
	}, [])

	const addAlunos = async (novoAluno) => {
		const alunosAtualizados = [...alunos, novoAluno]
		await setAlunos(alunosAtualizados)

		setInfoAluno({})
		localStorage.setItem('alunos', JSON.stringify(alunosAtualizados))
	}

	return (
		<Style.ContainerCadastroAluno>
			<h1>Cadastro de Alunos</h1>
			<div>
				<Style.InputSeach type="search" placeholder="Pesquise um aluno" />
				<ModalCadastroDeAluno
					setInfoAluno={setInfoAluno}
					infoAluno={infoAluno}
					addAlunos={addAlunos}
				/>
			</div>
			<div>
				<Lista alunos={alunos} />
			</div>
		</Style.ContainerCadastroAluno>
	)
}
