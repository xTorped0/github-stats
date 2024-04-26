import { Box } from "@mui/material";

import { IUser } from "@/types/user.types";

import { UserStats } from "../stats/UserStats";
import styles from './styles.module.scss';

interface IProps {
	data: IUser;
}

export function UserProfile(props: IProps) {
	const {	data } = props;
	
	return (
		<Box display="flex" flexWrap='wrap' gap='2' className={styles.wrapper}>
			<div className={styles.profile}>
				<span className={styles.title}>{data.name}</span>
				<div className={styles.additional}>
					<span>
						<strong> Public repositories: </strong>
						{ data.public_repos }
					</span>
					<span>
						<strong> Member since: </strong>
						{ new Date(data.created_at).toLocaleDateString() }
					</span>
					</div>
			</div>
			<UserStats />
		</Box>
	)
}