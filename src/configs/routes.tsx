import { RouteObject } from "react-router";
import LandingLayout from "../layouts/LandingLayout";
import LandingPage from "../pages/LandingPage";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import MyProjects from "../pages/MyProjects";
import Skills from "../pages/Skills";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <LandingLayout />,
		children: [
			{ path: "/", element: <LandingPage /> },
			{ path: "/about-me", element: <AboutMe /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/my-projects", element: <MyProjects /> },
			{ path: "/skills", element: <Skills /> },
		],
	},
];

export default routes;
