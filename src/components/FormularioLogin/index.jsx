import { signInAuthUserWithEmailPassword } from '../../utils/firebase'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { ContainerLogin, FormLogin, Logo } from './style'
import { useState } from 'react'

export const FormaularioLogin = () => {
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const { user } = await signInAuthUserWithEmailPassword(email, senha)
			console.log(user)
		} catch (erro) {
			switch (erro.code) {
				case 'auth/user-not-found':
					alert('No user associated with this email')
					break
				case 'auth/wrong-password':
					alert('Incorrect password for email')
					break
				default:
					console.log(erro)
			}
		}
	}

	return (
		<ContainerLogin>
			<Logo>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="52"
					height="52"
					fill="#0073b2"
					viewBox="0 0 256 256"
				>
					<path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z"></path>
				</svg>
				Academia CoderHouse
			</Logo>
			<div>
				<FormLogin onSubmit={handleSubmit}>
					<label>E-mail</label>
					<Input
						type="email"
						name="email"
						placeholder="Digite seu email"
						onChange={(event) => setEmail(event.target.value)}
						value={email}
					/>
					<label>Senha</label>
					<Input
						type="password"
						name="senha"
						placeholder="Digte sua senha"
						onChange={(event) => setSenha(event.target.value)}
						value={senha}
					/>
					<Button type="submit">Login</Button>
				</FormLogin>
			</div>
		</ContainerLogin>
	)
}
