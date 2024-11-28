export const Lista = ({ alunos }) => {
	return (
		<div>
			{alunos.length === 0 ? (
				<p>Nenhum aluno cadastrado</p>
			) : (
				<ul>
					{alunos.map((aluno) => (
						<li key={aluno.id}>{aluno.nome}</li>
					))}
				</ul>
			)}
		</div>
	)
}
