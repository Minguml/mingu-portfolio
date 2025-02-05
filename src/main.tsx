import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import routes from "./configs/routes.tsx";
import { NextUIProvider } from "@nextui-org/system";

const router = createBrowserRouter(routes, {basename: "/mingu-portfolio"});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</StrictMode>
);
