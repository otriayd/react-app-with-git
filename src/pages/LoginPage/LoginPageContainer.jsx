import { connect } from 'react-redux'
import React from 'react'
import { LoginPage } from './LoginPage'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'

class LoginPageClass extends React.Component {
	render() {
		if (this.props.isAuth) return <Navigate to={'/profile'} />
		return <LoginPage login={this.props.login} />
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export const LoginPageContainer = connect(mapStateToProps, {
	login
})(LoginPageClass)