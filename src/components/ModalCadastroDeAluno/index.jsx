import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'

export const ModalCadastroDeAluno = ({
	setInfoAluno,
	infoAluno,
	addAlunos
}) => {
	function handleChange(event) {
		const { name, value } = event.target
		setInfoAluno((prevInfoAluno) => ({
			...prevInfoAluno,
			[name]: value
		}))
	}

	function handleSubmit(event) {
		event.preventDefault()
		addAlunos(infoAluno)
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>Cadastrar Aluno</Button>
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
							name="nome"
							onChange={handleChange}
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
						/>
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Instrutor
						</Text>
						<TextField.Root
							placeholder="Digite seu nome"
							name="instrutor"
							onChange={handleChange}
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
