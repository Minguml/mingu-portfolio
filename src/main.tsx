import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import routes from "./configs/routes.tsx";
import { NextUIProvider } from "@nextui-org/system";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</StrictMode>
);
