import { useState } from 'react'
import { toast } from 'react-toastify'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase'

const defaultFormField = {
	email: '',
	senha: '',
	confirmeSenha: ''
}

export const CadastroUsuario = () => {
	const [formFilds, setFormFilds] = useState(defaultFormField)
	const { email, senha, confirmeSenha } = formFilds

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFilds({ ...formFilds, [name]: value })
	}

	const resetFormFields = () => {
		setFormFilds(defaultFormField)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (senha !== confirmeSenha) {
			toast.warn('Senhas não são iguais')
			return
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, senha)
			toast.success('Usuário criado com sucesso')
			resetFormFields()
		} catch (erro) {
			switch (erro.code) {
				case 'auth/email-already-in-use':
					toast.error('Usuário já existe com esse e-mail')
					break
				default:
					console.log('erro')
			}
		}
	}
	return (
		<div>
			<h2>Cadastre-se</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={handleChange}
						name="email"
					/>
				</div>
				<div>
					<label>Senha</label>
					<input
						type="password"
						value={senha}
						onChange={handleChange}
						name="senha"
					/>
				</div>
				<div>
					<label>Confirme Sua Senha</label>
					<input
						type="password"
						value={confirmeSenha}
						name="confirmeSenha"
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Cadatrar</button>
			</form>
		</div>
	)
}
