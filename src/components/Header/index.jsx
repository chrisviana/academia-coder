import { NavLink, Outlet } from 'react-router-dom'

export const Header = () => {
	return (
		<>
			<nav>
				<p>Logo</p>
				<ul>
					<li>
						<NavLink to="/app">Incio</NavLink>
					</li>
					<li>
						<NavLink to="exercicio">Exercicios</NavLink>
					</li>
					<li>Treinos</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}
