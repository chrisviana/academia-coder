import { ButtonContainer } from './style'

export const Button = ({ children, ...rest }) => {
	return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
