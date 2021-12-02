import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './headFoot/HeadFootComponent';
import Home from './pages/HomePage';
import Services from './pages/ServicesPage';
import Contact from './pages/ContactPage';
import './main.css';

function Main() {
	//this block effects a Scroll-To-Top on navigation
	const location = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
                    <Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Main;