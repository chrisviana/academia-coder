import { ContainerInput } from './style'

export const Input = ({ name, type, ...rest }) => {
	return <ContainerInput type={type} name={name} {...rest} />
}
