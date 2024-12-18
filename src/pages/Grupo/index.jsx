import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GrupoContext } from '../../context/GrupoContext'
import { ListaDeGrupo } from './components/ListaDeGrupo'

export const Grupo = () => {
	const [descricao, setDescricao] = useState()
	const [grupoList, setGrupoList] = useState([])
	const [grupoEditado, setGrupoEditado] = useState(null)

	const { saveGrupo, getGrupo, editarGrupo } = useContext(GrupoContext)

	useEffect(() => {
		getGrupo().then((grupoList) => {
			setGrupoList(grupoList)
		})
	}, [])

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!descricao) {
			toast.warning('Preencha os campos')
			return
		}

		if (grupoEditado) {
			handleEditaGrupo(grupoEditado.id, descricao)
		} else {
			handleCadastraGrupo(descricao)
		}
	}

	const handleCadastraGrupo = async (grupo) => {
		await saveGrupo({ descricao: grupo })
		setDescricao('')
		const grupos = await getGrupo()
		setGrupoList(grupos)
	}

	const handleEditaGrupo = async (id, descricao) => {
		await editarGrupo(id, { descricao })
		setDescricao('')
		setGrupoEditado(null)
		const grupos = await getGrupo()
		setGrupoList(grupos)
	}

	const handleEdit = (grupo) => {
		setDescricao(grupo.descricao)
		setGrupoEditado(grupo)
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
				<button type="submit">
					{grupoEditado ? 'Atualizar' : 'Cadastrar'}
				</button>
			</form>
			<ListaDeGrupo grupos={grupoList} handleEdit={handleEdit} />
		</div>
	)
}
