import styled from 'styled-components'

export const ContainerCadastroAluno = styled.div`
	width: 1220px;
	height: 100vh;
	margin: 32px auto;

	div {
		display: flex;
		align-items: center;
		gap: 16px;
	}
`
export const InputSeach = styled.input`
	width: 80%;
	height: 48px;
	padding: 16px;
	border-radius: 6px;
	border: 1px solid ${(props) => props.theme.colors.border};
`
