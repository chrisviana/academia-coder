import { useState, useEffect } from 'react'
import { Lista } from '../../components/Lista'
import { ModalCadastroDeAluno } from '../../components/ModalCadastroDeAluno'

export const Alunos = () => {
	const [infoAluno, setInfoAluno] = useState({})
	const [alunos, setAlunos] = useState([])

	useEffect(() => {
		// Carregar os alunos existentes do localStorage quando o componente for montado
		const alunosExistentes = JSON.parse(localStorage.getItem('alunos')) || []
		setAlunos(alunosExistentes)
	}, [])

	const addAluno = async (novoAluno) => {
		// Adiciona o novo aluno à lista
		const alunosAtualizados = [...alunos, novoAluno]
		await setAlunos(alunosAtualizados)
		setInfoAluno({})

		// Atualiza os alunos no localStorage
		localStorage.setItem('alunos', JSON.stringify(alunosAtualizados))
	}

	return (
		<div>
			<h1>Alunos</h1>
			<div>
				<input type="search" placeholder="Pesquise um aluno" />
				<ModalCadastroDeAluno
					setInfoAluno={setInfoAluno}
					infoAluno={infoAluno}
					addAluno={addAluno}
				/>
			</div>
			<div>
				<Lista alunos={alunos} />
			</div>
		</div>
	)
}
