import React from 'react'

class Login extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn : false
		}
		this.handleLoginClick = this.handleLoginClick.bind(this)
		this.handleLogoutClick = this.handleLogoutClick.bind(this)
	}

	handleLoginClick(){
		this.setState({
			isLoggedIn: true
		})
		console.log("login")
	}

	handleLogoutClick(){
		this.setState({
			isLoggedIn: false
		})
		console.log("logout")
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn
		let button

		if(isLoggedIn){
			button = <LogoutButton onClick = {this.handleLogoutClick}/>
		}else{
			button = <LoginButton onClick = {this.handleLoginClick}/>
		}

		return (
			<div>
				<h1>
					{this.state.isLoggedIn ? "logged in":"logged out"}
				</h1>
				{button}
			</div>
		)
	}
}

function LogoutButton(props){
	return(
		<button onClick={props.onClick}>
			Logout
		</button>
	)
}

function LoginButton(props){
	return(
		<button onClick = {props.onClick}>
			Login
		</button>
	)
}

export default Login;