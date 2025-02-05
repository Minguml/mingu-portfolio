import React, { useEffect } from "react";
import LandingAnimation from "../components/LandingAnimation";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Tab, Tabs } from "@nextui-org/tabs";
import { introStore } from "../store/introStore";

export default function LandingLayout() {
	const { loaded } = introStore();
	console.log(loaded);
	const paths = [
		"/home",
		"/about-me",
		"/projects",
		"/skills",
		"/contact",
	];
	const location = useLocation();
	const navigate = useNavigate();
	const tabs = [
		{
			id: "/",
			label: "Home",
		},
		{
			id: "/about-me",
			label: "About Me",
		},
		{
			id: "/my-projects",
			label: "My Projects",
		},
		// {
		// 	id: "/skills",
		// 	label: "Skills",
		// },
		{
			id: "/contact",
			label: "Contact",
		},
	];

	const handleSelectionChange = (k: React.Key) => {
		navigate(k as string);
	};

	return (
		<div className="h-screen w-full bg-smoky-black">
			<LandingAnimation />
			{loaded && <Outlet />}
			<div className="w-full fixed top-[84vh] items-center flex justify-center z-[100]">
				<div className="flex items-center">
					<Tabs
						onSelectionChange={
							handleSelectionChange
						}
						classNames={{
							tabList: "bg-almond relative",
							tab: "text-white",
						}}
						size="lg"
						color="secondary"
						aria-label="Dynamic tabs"
						items={tabs}>
						{(item) => (
							<Tab
								key={item.id}
								title={
									<span className="text-smoky-black ">
										{
											item.label
										}
									</span>
								}></Tab>
						)}
					</Tabs>
				</div>
			</div>
		</div>
	);
}
