import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { introStore } from "../store/introStore";

export default function LandingAnimation() {
	const { setLoaded } = introStore();
	const [isMounted, setIsMounted] = useState(true);

	useEffect(() => {
		document.title = "Nhat Minh - Portfolio";
		const timer = setTimeout(() => {
			setIsMounted(false);
		}, 1750);
		const firstLoad = setTimeout(() => {
			setLoaded();
		}, 2500);
		return () => {
			clearTimeout(timer);
			clearTimeout(firstLoad);
		};
	}, []);

	const introductionArray = [
		{
			title: "VU HOANG NHAT MINH",
			className: "text-4xl inline-block",
		},
		{
			title: "Software Engineer",
			className: "ml-4 text-4xl font-thin inline-block",
		},
	];

	const introAnimation = (index: number) => ({
		hidden: {
			opacity: 0,
			y: "-50px",
		},
		visible: {
			opacity: 1,
			y: "0px",
			transition: {
				delay: index * 0.25,
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
		end: {
			opacity: 0,
			y: "50px",
			transition: {
				delay: index * 0.25,
				duration: 0.5,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	});

	const introPropsFn = (index = 0) => ({
		initial: "hidden",
		animate: "visible",
		exit: "end",
		variants: introAnimation(index),
	});

	return (
		<>
			{" "}
			<AnimatePresence>
				{isMounted && (
					<motion.div className="fixed bg-[#100c0c] h-screen w-screen flex z-[200]">
						<motion.p className="text-white place-self-center m-auto">
							{introductionArray.map(
								(
									intro,
									index
								) => (
									<motion.span
										key={
											index
										}
										className={`${intro.className}`}
										{...introPropsFn(
											index
										)}>
										{
											intro.title
										}
									</motion.span>
								)
							)}
						</motion.p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
