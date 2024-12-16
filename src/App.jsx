import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Alunos } from './pages/Alunos'
import { Exercicio } from './pages/Exercicio'
import { Login } from './pages/Login'
import './style.css'
import { EditarAluno } from './pages/Alunos/Editar'
import { CadastroUsuario } from './pages/CadastroUsuario'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Grupo } from './pages/Grupo'

export function App() {
	const { currentUser } = useContext(UserContext)

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/sign-up" element={<CadastroUsuario />} />

			<Route
				path="/app"
				element={currentUser ? <Header /> : <Navigate to="/" replace />}
			>
				<Route index element={<Alunos />} />
				<Route path="editar/:id" element={<EditarAluno />} />
				<Route path="exercicio" element={<Exercicio />} />
				<Route path="grupo" element={<Grupo />} />
			</Route>
		</Routes>
	)
}
