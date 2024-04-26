import { errorCatch } from "@/api/error";
import Loader from "@/components/loader/Loader";
import { Box } from "@mui/material";
import { useUserStats } from "../hooks/useUserStats";
import Chart from "./Chart";

export function UserStats() {
	const { data, isPending, error } = useUserStats();

	return (
		<Box display="flex">
			{isPending && <Loader />}
			{error && <p>Error: {errorCatch(error)}</p>}
			{ data && <Chart data={data} /> }
		</Box>
	)
}