import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GrupoContext } from '../../context/GrupoContext'
import { ListaGrupo } from './components/ListaGrupo'

export const Grupo = () => {
	const [nome, setNome] = useState()
	const [grupoList, setGrupoList] = useState([])
	const [grupoEditado, setGrupoEditado] = useState(null)

	const { saveGrupo, getGrupo, editarGrupo } = useContext(GrupoContext)

	useEffect(() => {
		getGrupo().then((gruposList) => {
			setGrupoList(gruposList)
		})
	}, [getGrupo])

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!nome) {
			toast.warning('Preencha os campos')
			return
		}

		if (grupoEditado) {
			handleEditaGrupo(grupoEditado.id, nome)
		} else {
			handleCadastraGrupo(nome)
		}
	}

	const handleCadastraGrupo = async (grupo) => {
		await saveGrupo({ nome: grupo })
		setNome('')
		const grupos = await getGrupo()
		setGrupoList(grupos)
	}

	const handleEditaGrupo = async (id, nome) => {
		await editarGrupo(id, { nome })
		setNome('')
		setGrupoEditado(null)
		const grupos = await getGrupo()
		setGrupoList(grupos)
	}

	const handleEdit = (grupo) => {
		setNome(grupo.nome)
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
						name="nome"
						placeholder="Descrição"
						onChange={(event) => setNome(event.target.value)}
						value={nome}
					/>
				</div>
				<button type="submit">Cadastrar</button>
			</form>
			<ListaGrupo grupos={grupoList} handleEdit={handleEdit} />
		</div>
	)
}
