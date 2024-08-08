import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/my-portfolio/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/my-portfolio/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/my-portfolio/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/my-portfolio/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					{/* <div className="footer-credits-text">
						© 2023 Tharindu.dev. All Rights Reserved.
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
