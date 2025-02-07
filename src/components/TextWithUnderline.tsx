import React from "react";
import { motion } from "framer-motion";

export default function TextWithUnderline({
	text,
	duration = 0.3,
	underlineColor = "#FFFFFF",
}: {
	text: string;
	duration?: number;
	underlineColor?: string;
}) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<div
			onMouseOver={() => {
				setIsHovered(true);
			}} // Add your mouse over event here
			onMouseLeave={() => {
				setIsHovered(false);
			}} // Add your mouse leave event here
			style={{
				display: "inline-block",
				position: "relative",
				cursor: "pointer",
			}}>
			{/* Text */}
			<span style={{ position: "relative", zIndex: 1 }}>
				{text}
			</span>

			{/* Animated Underline */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={
					isHovered
						? { scaleX: 1 }
						: { scaleX: 0 }
				}
				transition={{ duration }}
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					height: "2px",
					width: "100%",
					originX: 0,
					backgroundColor: underlineColor,
				}}
			/>
		</div>
	);
}
