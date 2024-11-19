import './style.css'
import { InputDefult, ContainerLogin, FormLogin } from './ui/login'
export function App() {
	return (
		<ContainerLogin>
			<p>Imagem</p>
			<div>
				<FormLogin>
					<label>email</label>
					<InputDefult type="email" name="email" />
					<label>senha</label>
					<InputDefult type="password" name="password" />
					<button>Login</button>
				</FormLogin>
			</div>
		</ContainerLogin>
	)
}
