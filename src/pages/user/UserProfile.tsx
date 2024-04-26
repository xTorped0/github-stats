import { errorCatch } from "@/api/error";
import Loader from "@/components/loader/Loader";
import { Box } from "@mui/material";
import { useUserProfile } from "./hooks/useUserProfile";

export function UserProfile() {
	const { data, isPending, error } = useUserProfile();
	console.log(data);
	
	return (
		<Box gap='2'>
			{isPending && <Loader />}
			{error && <p>Error: {errorCatch(error)}</p>}
			{data && (
				<div>
					<h1>{data.name}</h1>
					<p>{data.email}</p>
				</div>
			)}
		</Box>
	)
}