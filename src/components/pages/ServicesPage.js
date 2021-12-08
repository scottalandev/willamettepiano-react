import React from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>SERVICES</h2>
						<p>
							Pianos perform best when tuned consistently–twice per year is appropriate for most pianos. Regular tuning not only keeps your
							instrument sounding beautiful, but also helps to stabilize and maintain proper pitch between tuning visits, ensuring your piano
							sounds its best year-round. Check out our services below and contact us to set up an appointment.
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
							<h2>Basic Tuning</h2>
						<p>
							Our services include a variety of tuning options, along with some other services meant to ensure your piano sounds it’s best and is
							a pleasure to play.
						</p>
						<NavLink to="/services">Our Services</NavLink>
					</div>
					<div className="col">
						<NavLink to="/contact">
							<h2>Contact</h2>
						</NavLink>
						<p>Get in touch with us to learn more about how we can serve you and your piano. Make your appointment today!</p>
						<NavLink to="/contact">Get In Touch</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default Services;
