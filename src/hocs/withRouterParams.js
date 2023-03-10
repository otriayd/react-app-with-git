import { useParams } from 'react-router-dom'

export const WithRouterParams = (Component) => {
	const RouterParams = (props) => {
		const { id } = useParams()
		return <Component {...props} id={id} />
	}
	return RouterParams
}