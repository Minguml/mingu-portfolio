import React, { useState, useEffect } from "react";
import LandingAnimation from "../components/LandingAnimation";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Tab, Tabs } from "@nextui-org/tabs";
import { introStore } from "../store/introStore";

export default function LandingLayout() {
    const { loaded } = introStore();
    console.log(loaded);
    // const paths = [
    // 	"/home",
    // 	"/about-me",
    // 	"/projects",
    // 	"/skills",
    // 	"/contact",
    // ];
    // const location = useLocation();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname);

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
        setSelectedTab(k as string);
        navigate(k as string);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const currentIndex = tabs.findIndex(
                (tab) => tab.id === selectedTab
            );

            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % tabs.length;
                handleSelectionChange(tabs[nextIndex].id);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                e.preventDefault();
                const prevIndex =
                    (currentIndex - 1 + tabs.length) % tabs.length;
                handleSelectionChange(tabs[prevIndex].id);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedTab]);

    return (
        <div className="h-screen w-full bg-smoky-black">
            <LandingAnimation />
            {loaded && <Outlet />}
            <div className="w-full sticky bottom-2 md:bottom-10 items-center flex justify-center z-[100]">
                <div className="flex items-center">
                    <Tabs
                        selectedKey={selectedTab}
                        onSelectionChange={handleSelectionChange}
                        classNames={{
                            tabList: "bg-almond relative",
                            tab: "text-white",
                        }}
                        size="sm"
                        color="secondary"
                        aria-label="Dynamic tabs"
                        items={tabs}
                    >
                        {(item) => (
                            <Tab
                                key={item.id}
                                title={
                                    <span className="text-smoky-black">
                                        {item.label}
                                    </span>
                                }
                            ></Tab>
                        )}
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
