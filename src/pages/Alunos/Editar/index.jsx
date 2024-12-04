import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // Para capturar os parâmetros da URL e redirecionar
import { Button, TextField, Flex, Text } from '@radix-ui/themes'

export const EditarAluno = () => {
	const { id } = useParams() // Captura o id da URL
	const navigate = useNavigate() // Para redirecionar após salvar as alterações

	const [aluno, setAluno] = useState(null)

	useEffect(() => {
		const alunosExistentes = JSON.parse(localStorage.getItem('alunos')) || []
		const alunoEditado = alunosExistentes.find((aluno) => aluno.id === id)
		setAluno(alunoEditado)
	}, [id])

	const handleChange = (event) => {
		const { name, value } = event.target
		setAluno((prevAluno) => ({
			...prevAluno,
			[name]: value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const alunosExistentes = JSON.parse(localStorage.getItem('alunos')) || []
		const alunosAtualizados = alunosExistentes.map((a) =>
			a.id === id ? aluno : a
		)
		localStorage.setItem('alunos', JSON.stringify(alunosAtualizados))
		navigate('/app') // Redireciona de volta para a lista de alunos
	}

	if (!aluno) {
		return <p>Carregando...</p> // Exibe uma mensagem de carregamento enquanto os dados do aluno são carregados
	}

	return (
		<div>
			<h1>Editar Aluno</h1>
			<form onSubmit={handleSubmit}>
				<Flex direction="column" gap="3">
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Nome
						</Text>
						<TextField.Root
							placeholder="Digite um nome"
							name="nome"
							onChange={handleChange}
							value={aluno.nome || ''}
						/>
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Idade
						</Text>
						<TextField.Root
							placeholder="Digite a idade"
							name="idade"
							onChange={handleChange}
							value={aluno.idade || ''}
						/>
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Instrutor
						</Text>
						<TextField.Root
							placeholder="Digite o nome do instrutor"
							name="instrutor"
							onChange={handleChange}
							value={aluno.instrutor || ''}
						/>
					</label>
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
