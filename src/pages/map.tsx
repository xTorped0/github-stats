import { APP_PAGES } from "@/config/pages.config";

import { HomePage } from "./home";
import { UserPage } from "./user";

export const routes = [
	{
		path: APP_PAGES.HOME,
		element: <HomePage />
	},
	{
		path: APP_PAGES.USER,
		element: <UserPage />
	}
];