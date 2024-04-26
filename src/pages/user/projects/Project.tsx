import { IRepo } from "@/types/user.types";

import { Link } from "react-router-dom";
import styles from './styles.module.scss';

interface IProjectProps {
	project: IRepo;
}

export function Project(props: IProjectProps) {
	const { project } = props;
	const { html_url, name, updated_at } = project;
	
	return (
		<div className={styles.project}>
			<Link to={html_url} className={styles.link}>
				{name}
			</Link>
			<span className={styles.updatedAt}>
				Last updated: {new Date(updated_at).toLocaleDateString()}
			</span>
		</div>
	)
}