import { motion } from "motion/react";

export default function LandingPage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1}}
			className="h-full w-full flex">
			<h1 className=" text-almond m-auto text-center">
				<span className="text-3xl">
					Hi there. I'm Nhat Minh.
				</span>
			</h1>
		</motion.div>
	);
}
