import { Field, reduxForm } from 'redux-form'
import styles from './LoginPage.module.scss'
import { isRequired, maxLengthCreator } from '../../utils/validators/validators'
import { InputText } from '../../components/FormsControl/FormsControl'

const maxLength = maxLengthCreator(50)

export const LoginPage = (props) => {
	const onSubmit = (formData) => {
		props.login(formData)
	}
	return (
		<div className={styles.login}>
			<ReduxLoginForm onSubmit={onSubmit} />
		</div>
	)
}

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				name="login"
				validate={[isRequired, maxLength]}
				placeholder="login"
				component={InputText} />
			<Field
				name="password"
				placeholder="password"
				validate={[isRequired, maxLength]}
				component={InputText} />
			<Field name="rememberMe" type="checkbox" component="input" />
			<button>log in</button>
		</form>
	)
}

export const ReduxLoginForm = reduxForm({
	form: 'login'
})(LoginForm)