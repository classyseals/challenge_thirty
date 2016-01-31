import React from 'react';
require('styles/Navbar.css');

class Navbar extends React.Component {
	onClickHandler() {
		//TODO: goto login page
		console.log("on click login");
	}
	render() {
		return (
			<div className="navbar">
				<div className="logo">Challenge 30</div>
				<button className="login" onClick={this.onClickHandler}>Login</button>
			</div>);
	}
}

export default Navbar;