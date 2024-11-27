export const Lista = ({ alunos }) => {
	return (
		<div>
			{alunos.length === 0 ? (
				<p>Não há alunos cadastrados.</p>
			) : (
				<ul>
					{alunos.map((aluno, index) => (
						<li key={index}>
							{aluno.nome} - {aluno.idade} anos
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
