import React, { useState } from "react";
import { motion } from "motion/react";
import { projectsData } from "../utils/projectConstants";
import { LinkIcon } from "../assets/LinkIcon";
import TechStack from "./TechStack";

export default function ProjectsListing() {
	const [parentWidth, setParentWidth] = useState(0);

	const handleClick = (url: string) => {
		if (url) {
			window.open(url, "_blank");
		} else {
			alert("This project is private.");
		}
	};

	return (
		<div
			ref={(node) =>
				setParentWidth(
					node?.getBoundingClientRect().width || 0
				)
			}
			className="relative w-full h-full">
			{parentWidth !== 0 &&
				projectsData.map((project, index) => (
					<motion.div
						onClick={() =>
							handleClick(
								project.github_link
							)
						}
						key={index}
						title={project.github_link}
						className="cursor-pointer absolute flex flex-col group p-6 rounded-2xl w-64 h-[22rem] border-4 border-axolotl hover:text-almond text-black-olive"
						whileHover={{
							scale: 1.2,
							backgroundColor:
								"#697565",
							rotate: 0,
							zIndex: 4,
							transition: {
								duration: 0.3,
							},
						}}
						initial={{
							rotate: project
								.specs[0],
							left:
								(Math.min(
									280 *
										projectsData.length,
									parentWidth
								) /
									projectsData.length) *
									index -
								index * 30,
							top: `calc(50% + ${
								project
									.specs[1] +
								(index + 1) *
									110 -
								index * 100
							}px)`,
							translateY: "-50%",
						}}
						animate={{
							rotate: project
								.specs[0],
							backgroundColor:
								"#ECDFCC",
							zIndex: 3 - index,
							top: `calc(50% + ${project.specs[1]}px)`,
							left:
								(Math.min(
									280 *
										projectsData.length,
									parentWidth
								) /
									projectsData.length) *
								index,
							translateY: "-50%",
							transition: {
								type: "spring",
								duration:
									1 -
									index *
										0.05,
								delay:
									index *
									0.1,
							},
						}}>
						<div className="absolute top-2 right-2">
							<LinkIcon fill="#ECDFCC" />
						</div>
						<div className="flex flex-col gap-y-4">
							<p className="text-2xl font-bold">
								{project.title}
							</p>
							<p>
								{
									project.description
								}
							</p>
							<p>
								<span className="font-bold">
									Role:
								</span>{" "}
								{project.role}
							</p>
							<p>
								<span className="font-bold">
									Made
									with:
								</span>{" "}
								<br />
								<TechStack
									stack={
										project.stacks
									}
								/>
							</p>
						</div>
					</motion.div>
				))}
		</div>
	);
}
