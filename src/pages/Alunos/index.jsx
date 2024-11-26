import { Lista } from '../../components/Lista'
import { ModalCadastroDeAluno } from '../../components/ModalCadastroDeAluno'

export const Alunos = () => {
	return (
		<div>
			<h1>Alunos</h1>
			<div>
				<input type="search" placeholder="Pesquise um aluno" />
				<ModalCadastroDeAluno />
			</div>
			<div>
				<Lista name1="Bianca" name2="Caio" name3="Caique" />
			</div>
		</div>
	)
}
