import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
	return (
		<div className="page-content">
			<div className="container">
                <div className="row">
                    <div className="col">
                        <h1>WELCOME TO WILLAMETTE PIANO SERVICE</h1>
                        <p>We are proud to offer a variety of piano services to Oregon’s Willamette Valley and surrounding areas. Check out our <NavLink to="/services">services</NavLink> or <NavLink to="/contact">contact us</NavLink> to create a new service appointment.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NavLink to="/services"><h2>Services</h2></NavLink>
                        <p>Our services include a variety of tuning options, along with some other services meant to ensure your piano sounds it’s best and is a pleasure to play.</p>
                        <NavLink to="/services"><button className="btn btn-secondary">Our Services</button></NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/contact"><h2>Contact</h2></NavLink>
                        <p>Get in touch with us to learn more about how we can serve you and your piano. Make your appointment today!</p>
                        <NavLink to="/contact"><button className="btn btn-secondary">Get In Touch</button></NavLink>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default Home;
