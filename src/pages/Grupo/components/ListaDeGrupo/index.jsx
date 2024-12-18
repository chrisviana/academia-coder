import IconEdit from '../../../../assets/pencil.svg'
import IconTrash from '../../../../assets/trash.svg'

export const ListaDeGrupo = ({ grupos, handleEdit, handleDeleteGrupo }) => {
	return (
		<div>
			{grupos.length === 0 ? (
				<p>Nenhum grupo encontrado</p>
			) : (
				<ul>
					{grupos.map((grupo) => (
						<li key={grupo.id}>
							<span>{grupo.descricao}</span>
							<button onClick={() => handleEdit(grupo)}>
								<img src={IconEdit} alt="Icone de Editar" />
							</button>
							<button onClick={() => handleDeleteGrupo(grupo.id)}>
								<img src={IconTrash} alt="Icone de Excluir" />
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
