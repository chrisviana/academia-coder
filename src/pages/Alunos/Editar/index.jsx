import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AlunoContext } from '../../../context/AlunoContext'

export const EditarAluno = () => {
	const { getAlunoById, editarAluno } = useContext(AlunoContext)
	const { id } = useParams()
	const navigate = useNavigate()

	const [aluno, setAluno] = useState(null)

	useEffect(() => {
		// Chama a função para pegar o aluno pelo ID
		const fetchAluno = async () => {
			const alunoData = await getAlunoById(id)
			if (alunoData) {
				setAluno(alunoData)
			}
		}
		fetchAluno()
	}, [id, getAlunoById])

	console.log(aluno)
	if (!aluno) {
		return <p>Aluno não encontrado 😭</p>
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setAluno((prevAluno) => ({
			...prevAluno,
			[name]: value
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		await editarAluno(id, aluno)
		navigate('/app')
	}

	return (
		<div>
			<h1>Editar Aluno</h1>
			<form onSubmit={handleSubmit}>
				<Flex direction="column" gap="3">
					<div>
						<Text weight="bold">Nome</Text>
						<TextField.Root
							placeholder="Digite um nome"
							name="nome"
							onChange={handleChange}
							value={aluno.nome || ''}
						/>
					</div>
					<div>
						<Text weight="bold">Idade</Text>
						<TextField.Root
							placeholder="Digite uma idade"
							name="idade"
							onChange={handleChange}
							value={aluno.idade || ''}
						/>
					</div>
					<div>
						<Text weight="bold">Instrutor</Text>
						<TextField.Root
							placeholder="Digite o seu nome"
							name="instrutor"
							onChange={handleChange}
							value={aluno.instrutor || ''}
						/>
					</div>
				</Flex>
				<Flex gap="3" mt="4" justify="end">
					<Button variant="soft" color="gray" onClick={() => navigate('/app')}>
						Cancelar
					</Button>
					<Button type="submit">Salvar</Button>
				</Flex>
			</form>
		</div>
	)
}
