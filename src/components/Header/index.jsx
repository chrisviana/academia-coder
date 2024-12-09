import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase'

export const Header = () => {
	const navigate = useNavigate()

	const singOut = () => {
		signOutUser()
		navigate('/')
	}
	return (
		<>
			<nav>
				<p>Logo</p>
				<ul>
					<li>
						<NavLink to="/app">Alunos</NavLink>
					</li>
					<li>
						<NavLink to="exercicio">Exercicios</NavLink>
					</li>
					<li>Treinos</li>
					<li>
						<button onClick={singOut}>Sair</button>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}
