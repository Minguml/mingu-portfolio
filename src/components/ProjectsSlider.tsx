import React from "react";
import { projectsData } from "../utils/projectConstants";
import SliderCard from "./SliderCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectsSlider() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="w-1/2 h-full m-auto">
			<Carousel responsive={responsive}>
				{projectsData.map((project, index) => (
					<SliderCard
						key={index}
						title={project.title}
						role={project.role}
						description={
							project.description
						}
						github_link={
							project.github_link
						}
					/>
				))}
			</Carousel>
		</div>
	);
}
