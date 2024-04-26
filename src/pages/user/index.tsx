import { Grid } from "@mui/material";
import { UserProfile } from "./UserProfile";
import { UserProjects } from "./UserProjects";
import { UserStats } from "./stats/UserStats";

export function UserPage() {

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={4}>
				<UserProfile />
			</Grid>
			<Grid item xs={8} md={8}>
				<UserStats />
			</Grid>
			<Grid item xs={12} md={12}>
				<UserProjects />
			</Grid>
		</Grid>
	);
}
