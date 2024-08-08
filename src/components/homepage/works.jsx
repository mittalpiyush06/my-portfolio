import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./intuit.png"
								alt="intuit"
								className="work-image"
							/>
							<div className="work-title">Intuit</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">July 2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="./intuit.png"
								alt="intuit"
								className="work-image"
							/>
							<div className="work-title">Intuit</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Feb 2023 - June 2023</div>
						</div>
						<div className="work">
							<img
								src="./infuzex.png"
								alt="infuzex"
								className="work-image"
							/>
							<div className="work-title">Infuzex</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">May 2022 - June 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
