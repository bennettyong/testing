import React from 'react'

class User extends React.Component{
	render(){
		return <div>
			<img src={this.props.logo} />
			<h1>{this.props.author.firstname}</h1>
			<h2>{this.props.author.lastname}</h2>
			<h2>{this.props.text}</h2>
		</div>
	}
}

export default User