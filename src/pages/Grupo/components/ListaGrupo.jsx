import { Link } from 'react-router-dom'
import IconEdit from '../../../assets/pencil.svg'
export const ListaGrupo = ({ grupos, handleEdit }) => {
	return (
		<div>
			{grupos.length === 0 ? (
				<p>Nenhum aluno cadastrado</p>
			) : (
				<ul>
					{grupos.map((grupo) => (
						<li key={grupo.id}>
							<span>{grupo.nome}</span>
							<Link>
								<button onClick={() => handleEdit(grupo)}>
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
