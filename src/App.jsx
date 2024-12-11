import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Alunos } from './pages/Alunos'
import { Exercicio } from './pages/Exercicio'
import { Login } from './pages/Login'
import './style.css'
import { EditarAluno } from './pages/Alunos/Editar'
import { CadastroUsuario } from './pages/CadastroUsuario'

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/sign-up" element={<CadastroUsuario />} />

			<Route path="/app" element={<Header />}>
				<Route index element={<Alunos />} />
				<Route path="editar/:id" element={<EditarAluno />} />
				<Route path="exercicio" element={<Exercicio />} />
			</Route>
		</Routes>
	)
}
