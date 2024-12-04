import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Alunos } from './pages/Alunos'
import { Exericio } from './pages/Exercicio'
import { Login } from './pages/Login'
import { EditarAluno } from './pages/Alunos/Editar'
import './style.css'

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route path="/app" element={<Header />}>
				<Route index element={<Alunos />} />
				<Route path="editar/:id" element={<EditarAluno />} />
				<Route path="exercicio" element={<Exericio />} />
			</Route>
		</Routes>
	)
}
