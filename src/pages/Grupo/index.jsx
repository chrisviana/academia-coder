import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { GrupoContext } from '../../context/GrupoContext'

export const Grupo = () => {
	const [descricao, setDescricao] = useState()

	const { saveGrupo } = useContext(GrupoContext)

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!descricao) {
			toast.warning('Preencha os campos')
			return
		}

		handleCadastraGrupo(descricao)
	}

	const handleCadastraGrupo = async (grupo) => {
		await saveGrupo({ grupo })
	}

	return (
		<div>
			<h1>Cadastro de Grupo</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Descrição</label>
					<input
						type="text"
						name="descricao"
						placeholder="Descrição"
						onChange={(event) => setDescricao(event.target.value)}
						value={descricao}
					/>
				</div>
				<button type="submit">Cadastrar</button>
			</form>
		</div>
	)
}
