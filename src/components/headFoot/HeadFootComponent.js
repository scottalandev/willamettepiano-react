import React from 'react';
import { NavLink } from 'react-router-dom';
import wpsLogo from 'img/wps-logo.png';
import './headFoot.css';

export function Header() {
	return (
		<>
			<div className="container-fluid header-container">
				<div className="header-background" />
				<div className="row justify-content-center">
					<NavLink to="/">
						<img src={wpsLogo} alt="Willamette Piano Service logo" className="wps-logo" />
					</NavLink>
				</div>
				<nav className="flex-row nav-links">
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
			</div>
		</>
	);
}

export function Footer(props) {
	let year = new Date().getFullYear();
	return (
		<div className="container-fluid bg-dark text-light footer-content">
			<p className="grey-text"> &copy; {year} Willamette Piano Service</p>
		</div>
	);
}
