import IconEdit from '../../../../assets/pencil.svg'

export const ListaDeGrupo = ({ grupos, handleEdit }) => {
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
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
