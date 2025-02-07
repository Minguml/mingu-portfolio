import TypedName from "../components/TypedName";
import { motion } from "motion/react";
import CssIcon from "../assets/CssIcon";
import JavascriptIcon from "../assets/JavascriptIcon";
import ReactIcon from "../assets/ReactIcon";
import HtmlIcon from "../assets/HtmlIcon";
import { MongoIcon } from "../assets/MongoIcon";
import NodeIcon from "../assets/NodeIcon";
import ExpressIcon from "../assets/ExpressIcon";

export default function AboutMe() {
	const skills = [
		{ title: "React", image: <ReactIcon fill="#58c4dc" /> },
		{
			title: "JavaScript",
			image: <JavascriptIcon fill="#f8e41c" />,
		},
		{ title: "HTML", image: <HtmlIcon fill="#e84c24" /> },
		{ title: "CSS", image: <CssIcon fill="#1874b4" /> },
		{ title: "MongoDB", image: <MongoIcon fill="#08ac44" /> },
		{ title: "Node.js", image: <NodeIcon fill="#90c404" /> },
		{ title: "Express", image: <ExpressIcon fill="white" /> },
	];
	const schoolLink =
		"https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_C%C3%B4ng_ngh%E1%BB%87_Th%C3%B4ng_tin,_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Qu%E1%BB%91c_gia_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh";

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-full grid grid-cols-2 gap-8 mx-28 min-w-[1320px]">
			<div className="my-auto flex flex-col gap-y-4">
				<h1 className="text-white text-2xl">About </h1>
				<TypedName />
				<p className="whitespace-pre-line text-white tracking-widest text-sm lg:text-base">
					A senior Software Engineering student at
					Ho Chi Minh city's University of
					Information Technology{" "}
					<span
						title="University of Information Technology"
						onClick={() =>
							window.open(
								schoolLink,
								"_blank"
							)
						}
						className="text-react font-bold cursor-pointer hover:underline">
						(UIT)
					</span>
					{""} with a strong passion for web
					development.
					<br />
					Over the course of my studies, I have
					gained hands-on experience in{" "}
					<span className="text-react font-bold">
						React
					</span>
					,{" "}
					<span className="text-java-script font-bold">
						JavaScript
					</span>{" "}
					and I am now seeking an internship
					opportunity to apply my skills in a
					real-world environment. I am
					particularly interested in web
					development, and I am eager to
					contribute and learn from a dynamic
					team.
				</p>
				<h1 className="text-white text-2xl">Skills</h1>
				<div className="flex gap-4 mt-4">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="flex flex-col items-center gap-2">
							{skill.image}
							<span className="text-white font-bold">
								{skill.title}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col m-auto gap-y-4">
				<h1 className="text-white text-2xl">
					Place of Education
				</h1>
				<h2 className="text-almond text-4xl">
					Ho Chi Minh City's University of
					Information Technology (UIT)
				</h2>
				<h1 className="text-white text-2xl">IELTS</h1>
				<h2 className="text-almond text-4xl">8.0</h2>
			</div>
		</motion.div>
	);
}
