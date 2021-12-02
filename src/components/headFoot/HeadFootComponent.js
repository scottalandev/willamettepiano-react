import React from 'react';
import { NavLink } from 'react-router-dom';
import './headFoot.css';

export function Header() {
	return <div></div>;
}

export function Footer(props) {
	let year = new Date().getFullYear();
	return (
		<div className="container-fluid bg-dark text-light footer-content">
			<p className="grey-text"> &copy; {year} Willamette Piano Service</p>
		</div>
	);
}
