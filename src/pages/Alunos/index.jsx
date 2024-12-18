import { useState, useEffect, useContext } from 'react'
import { Lista } from '../../components/Lista'
import { ModalCadastroDeAluno } from '../../components/ModalCadastroDeAluno'
import * as Style from './style'
import { AlunoContext } from '../../context/AlunoContext'

export const Alunos = () => {
	const { saveAluno, getAluno } = useContext(AlunoContext)

	const [infoAluno, setInfoAluno] = useState({})
	const [alunos, setAlunos] = useState([])

	useEffect(() => {
		getAluno().then((alunosList) => {
			setAlunos(alunosList)
		})
	}, [])

	console.log(alunos)

	const addAlunos = async (novoAluno) => {
		await saveAluno(novoAluno)
		setInfoAluno({})
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
