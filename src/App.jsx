import { Header } from './components/Header'
import { Alunos } from './pages/Alunos'
import { Exericio } from './pages/Exercicio'
import { Login } from './pages/Login'
import './style.css'

export function App() {
	return (
		<>
			{/* <Header /> */}
			<Alunos />
			{/* <Login /> */}
			<Exericio />
		</>
	)
}
