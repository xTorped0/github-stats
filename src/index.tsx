import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./pages/map";
import { Providers } from "./providers";

import "./styles/index.scss";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Providers>
		<RouterProvider router={router} />
	</Providers>
);
