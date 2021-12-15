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
				<nav className="flex-row head-nav">
					<NavLink to="/services">SERVICES</NavLink>
					<NavLink to="/contact">CONTACT</NavLink>
				</nav>
			</div>
		</>
	);
}


export function Footer(props) {
	let year = new Date().getFullYear();
	return (
		<div className="container-fluid footer-container">
			<div className="row align-items-center">
				<div className="d-none d-md-inline col-md-4">
					<img src={wpsLogo} className="foot-logo" alt="Willamette Piano Service logo" />
				</div>
                <div className="col col-md-8">
                    <div className="row align-items-center">
                        <div className="col-sm-3 offset-sm-2 offset-md-0">
                            <nav className="nav foot-nav flex-column text-center text-sm-start">
                                <NavLink to="/">HOME</NavLink>
                                <NavLink to="/services">SERVICES</NavLink>
                                <NavLink to="/contact">CONTACT</NavLink>
                            </nav>
                        </div>
                        <div className="col-sm-7 foot-text">
                            <a href="mailto:willamettepiano@gmail.com">willamettepiano@gmail.com</a>
                            <hr />
                            <p> &copy; {year} Willamette Piano Service</p>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
}
