import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

class Navbar extends React.Component {
	render() {
		return (
				<div className="header-wrapper">
					<div className="container navbar">
						<NavLink to="/homepage" activeClassName="page-home" className="nav-link">Home</NavLink>
						<NavLink to="/posts" activeClassName="page-posts" className="nav-link">Posts</NavLink>
						<NavLink to="/photos" activeClassName="page-photos" className="nav-link">Photos</NavLink>
						<NavLink to="/contacts" activeClassName="page-contacts" className="nav-link">Contacts</NavLink>
					</div>
				</div>
		)
	}
}

export default Navbar;
