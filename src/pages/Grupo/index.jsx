import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { GrupoContext } from '../../context/GrupoContex'

export const Grupo = () => {
	const { saveGrupo } = useContext(GrupoContext)

	const [descricao, setDescricao] = useState('')

	const handleCadastroGrupo = async (grupo) => {
		console.log(grupo)
		await saveGrupo(grupo)
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setDescricao((prevGrupo) => ({
			...prevGrupo,
			[name]: value
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (
			descricao === undefined ||
			!descricao ||
			Object.keys(descricao).length === 0
		) {
			toast.warning('Preencha os campos obrigatórios')
			return
		}

		handleCadastroGrupo(descricao)
		setDescricao('')
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Cadastro de Grupo</h1>
				<div>
					<label>Descrição*</label>
					<input
						type="text"
						name="descricao"
						placeholder="Descrição"
						autoComplete="off"
						onChange={handleChange}
						value={descricao?.descricao || ''}
					/>
				</div>
				<button type="submit">Cadastrar</button>
			</form>
		</div>
	)
}
