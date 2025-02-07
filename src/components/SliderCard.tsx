type sliderCardProps = {
	title: string;
	role: string;
	description: string;
	github_link: string;
};

export default function SliderCard(props: sliderCardProps) {
	const clickHandler = () => {
		window.open(props.github_link, "_blank");
	};
	return (
		<div className="bg-black-olive p-8" onClick={clickHandler}>
			<h1>{props.title}</h1>
			<p>{props.role}</p>
			<p>{props.description}</p>
		</div>
	);
}
