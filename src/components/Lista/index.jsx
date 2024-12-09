import { Link } from 'react-router-dom'
import IconEdit from '../../assets/pencil.svg'
export const Lista = ({ alunos }) => {
	return (
		<div>
			{alunos.length === 0 ? (
				<p>Nenhum aluno cadastrado</p>
			) : (
				<ul>
					{alunos.map((aluno) => (
						<li key={aluno.id}>
							<span>{aluno.nome}</span>
							<Link to={`/app/editar/${aluno.id}`}>
								<button>
									<img src={IconEdit} alt="Icone de Editar" />
								</button>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
