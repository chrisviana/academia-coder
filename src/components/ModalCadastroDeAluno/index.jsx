import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { useState } from 'react'

export const ModalCadastroDeAluno = ({ setInfoAluno, infoAluno, addAluno }) => {
	const [open, setOpen] = useState(false)

	function handleChange(event) {
		const { name, value } = event.target
		setInfoAluno((prevInfoAluno) => ({
			...prevInfoAluno,
			[name]: value
		}))
	}

	function handleSubmit(event) {
		event.preventDefault()
		if (!infoAluno.nome) {
			alert('Todos os campos são obrigatórios.')
			return
		}

		// Chama a função addAluno para adicionar o novo aluno
		addAluno(infoAluno)
		setOpen(false)
	}

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger>
				<Button onClick={() => setOpen(true)}>Cadastrar Aluno</Button>
			</Dialog.Trigger>

			<Dialog.Content maxWidth="450px">
				<Dialog.Title>Cadastro de Aluno</Dialog.Title>

				<Flex direction="column" gap="3">
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Nome
						</Text>
						<TextField.Root
							placeholder="Digite um nome"
							onChange={handleChange}
							name="nome"
							value={infoAluno.nome || ''}
						/>
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Idade
						</Text>
						<TextField.Root
							placeholder="Digite a idade"
							onChange={handleChange}
							name="idade"
						/>
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Endereço
						</Text>
						<TextField.Root
							placeholder="Digite o endereço"
							onChange={handleChange}
							name="endereco"
						/>
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Instrutor
						</Text>
						<TextField.Root
							placeholder="Digite seu nome"
							onChange={handleChange}
							name="instrutor"
						/>
					</label>
				</Flex>

				<Flex gap="3" mt="4" justify="end">
					<Dialog.Close>
						<Button variant="soft" color="gray">
							Cancelar
						</Button>
					</Dialog.Close>
					<Dialog.Close>
						<Button onClick={handleSubmit}>Salvar</Button>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	)
}
