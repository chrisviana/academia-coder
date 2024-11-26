import styled from 'styled-components'

export const ContainerLogin = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const FormLogin = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 300px;

	label {
		color: #000;
		font-size: 18px;
	}
`

export const Logo = styled.span`
	display: flex;
	align-items: center;
	gap: 16px;
	font-size: 32px;
	color: #0073b2;
`
