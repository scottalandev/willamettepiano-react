import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

function HomeCard({ title, text, path, button }) {
	return (
		<div className="col-md-6 home-card-container">
			<div className="home-card">
				<h2>
					<NavLink to={path}>{title}</NavLink>
				</h2>
				<p>{text}</p>
				<NavLink to={path}><button className="home-btn">{button}</button></NavLink>
			</div>
		</div>
	);
}

function Home() {
	return (
		<div className="page-content">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>WELCOME TO WILLAMETTE PIANO SERVICE</h1>
						<p>
							We are proud to offer a variety of piano services to Oregon's Willamette Valley and surrounding areas. Check out our{' '}
							<NavLink to="/services">services</NavLink> or <NavLink to="/contact">contact us</NavLink> to create a new service appointment.
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row home-card-row justify-content-center">
					<HomeCard
						title="Services"
						text="Our services include a variety of tuning options, along with some other services meant to ensure your piano sounds it's best and
                        is a pleasure to play."
						path="/services"
						button="Our Services"
					/>
					<HomeCard
						title="Contact"
						text="Get in touch with us to learn more about how we can serve you and your piano. Make your appointment today!"
						path="/contact"
						button="Schedule Service"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
