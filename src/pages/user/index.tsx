import Loader from "@/components/loader/Loader";
import { Box } from "@mui/material";
import { useUserProfile } from "./hooks/useUserProfile";
import { UserProfile } from "./profile/UserProfile";
import { UserProjects } from "./projects/UserProjects";

export function UserPage() {
	const { data, isPending, error } = useUserProfile();
	
	if(error && error?.response.status === 404) {
		return <Box p={2}>User not found</Box>;
	} else if(error) {
		return <Box p={2}>Something went wrong</Box>;
	}

	if(isPending) return <Box p={2}> <Loader /> </Box>;
	
	return (
		<Box display="flex" flexDirection="column" gap={1} p={2}>
			<UserProfile data={data!} />
			<UserProjects />
		</Box>
	);
}
