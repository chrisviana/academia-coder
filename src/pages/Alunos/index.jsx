import { useState } from 'react'
import { Lista } from '../../components/Lista'
import { ModalCadastroDeAluno } from '../../components/ModalCadastroDeAluno'

export const Alunos = () => {
	const [infoAluno, setInfoAluno] = useState({})
	const [alunos, setAlunos] = useState([])

	const addAlunos = async (novoAluno) => {
		const alunosAtualizados = [...alunos, novoAluno]
		await setAlunos(alunosAtualizados)
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
					addAlunos={addAlunos}
				/>
			</div>
			<div>
				<Lista alunos={alunos} />
			</div>
		</div>
	)
}
