import { Box } from "@mui/material";
import { useUserStats } from "../hooks/useUserStats";
import Chart from "./Chart";

import { WithRequest } from "@/components/with-request/WithRequest";
import styles from './styles.module.scss';

export function UserStats() {
	const { data, isPending, error } = useUserStats();

	return (
		<Box 
			display="flex" 
			flexDirection="column" 
			justifyContent="center" 
			alignItems="center"
			p={1}
		>
			<WithRequest isPending={isPending} error={error} />
			<span className={styles.title}> Language Stats </span>
			{ data && <Chart data={data} /> }
		</Box>
	)
}