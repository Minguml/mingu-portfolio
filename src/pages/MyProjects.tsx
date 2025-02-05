import React from "react";
import ProjectsSlider from "../components/ProjectsSlider";
import ProjectsListing from "../components/ProjectsListing";

export default function MyProjects() {
	return (
		<div className="flex w-full h-full relative">
			<div className="relative z-[4] m-auto flex h-full max-h-[610px] w-full max-w-[800px] flex-col p-6">
				<ProjectsListing />
			</div>
		</div>
	);
}
