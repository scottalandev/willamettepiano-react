import React from 'react';
import { NavLink } from 'react-router-dom';
import { wpsServices } from '../data/wpsServices';

function RenderService({ service }) {
	if (service) {
		return (
			<div className="service-card col-sm-6 col-md-4 col-lg-3 offset-lg-1">
				<h3>{service.title}</h3>
				<p>{service.description}</p>
				{service.price1Name != null ? (
					<div className="service-price">
						<h4>
							{service.price1Name}: ${service.price1Cost}
						</h4>
						{service.price1Sub != null ? (
							<div className="service-price-sub">
								<p>({service.price1Sub})</p>
							</div>
						) : null}
					</div>
				) : null}
				{service.price2Name != null ? (
					<div className="service-price">
						<h4>
							{service.price2Name}: ${service.price2Cost}
						</h4>
						{service.price2Sub != null ? (
							<div className="service-price-sub">
								<p>({service.price2Sub})</p>
							</div>
						) : null}
					</div>
				) : null}
			</div>
		);
	}
}

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
				<div className="row justify-content-center">
					{wpsServices.map((service) => (
						<RenderService service={service} />
					))}
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<NavLink to="/contact">
                    <button className="btn btn-secondary">Contact Us to Schedule</button>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default Services;
