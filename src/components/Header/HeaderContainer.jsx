import { connect } from 'react-redux'
import React from 'react'
import { Header } from './Header.jsx'
import { setAuthDataThunkCreator, logout } from '../../redux/auth-reducer.js'

class HeaderClass extends React.Component {
	componentDidMount() {
		this.props.setAuthDataThunkCreator()
	}
	render() {
		return <Header login={this.props.login} logout={this.props.logout} />
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login
	}
}
export const HeaderContainer = connect(mapStateToProps, {
	setAuthDataThunkCreator,
	logout
})(HeaderClass)