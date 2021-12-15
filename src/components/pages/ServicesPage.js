import React from 'react';
import { NavLink } from 'react-router-dom';
import { wpsServices } from '../data/wpsServices';
import './pages.css';


function RenderService({ service }) {
	if (service) {
		return (
			<div className="service-card-holder col-md-6 col-xl-4">
				<div className="service-card">
					<h3>{service.title}</h3>
					<p>{service.description}</p>

					{service.price1Name != null ? (
						<div className="service-price-cont">
							<div className="service-card-price1">
								<h4 className="service-price">
									{service.price1Name}: ${service.price1Cost}
								</h4>

								{service.price1Sub != null ? (
									<div className="service-price-sub">
										<p>({service.price1Sub})</p>
									</div>
								) : null}
							</div>

							{service.price2Name != null ? (
								<div className="service-card-price2">
									<h4 className="service-price">
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
					) : null}
				</div>
			</div>
		);
	}
}

function Services() {
	return (
		<div className="page-content">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>SERVICES</h1>
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
					<NavLink to="/contact" className="svc-button">
						Schedule Service
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Services;
