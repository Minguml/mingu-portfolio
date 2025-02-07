import ReactIcon from "../assets/ReactIcon";
import { NextIcon } from "../assets/NextIcon";
import { TailwindIcon } from "../assets/TailwindIcon";
import { MongoIcon } from "../assets/MongoIcon";
import { JavaIcon } from "../assets/JavaIcon";
import { RssIcon } from "../assets/RssIcon";

type TechStackProps = {
	stack: string[];
};

export default function TechStack(props: TechStackProps) {
	const checkIcon = (tech: string) => {
		switch (tech) {
			case "React":
				return <ReactIcon />;
			case "NextJS":
				return <NextIcon />;
			case "TailwindCSS":
				return <TailwindIcon />;
			case "MongoDB":
				return <MongoIcon />;
			case "Java":
				return <JavaIcon />;
			case "RSS":
				return <RssIcon />;
		}
	};

	return (
		<div className="flex flex-row">
			{props.stack.map((tech, index) => (
				// <div key={index}></div>
				<div key={index} className="mr-4 p-1" title={tech}>
					{checkIcon(tech)}
				</div>
			))}
		</div>
	);
}
