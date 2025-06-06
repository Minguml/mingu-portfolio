import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		{...props}>
		<path d="M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245z" />
	</svg>
);
export { SvgComponent as NextIcon };
