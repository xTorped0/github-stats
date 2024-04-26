import { useUserProjects } from '../hooks/useUserProjects';
import { Project } from './Project';

import { WithRequest } from '@/components/with-request/WithRequest';
import styles from './styles.module.scss';



export function UserProjects() {
	const { data, isPending, error } = useUserProjects();

	return (
		<div className={styles.projects}>
			<span className={styles.title}>Projects</span>
			<div className={styles.list}>
				<WithRequest isPending={isPending} error={error} />
				{
					data?.map((project) => (
						<Project project={project} key={project.node_id} />
					))
				}
			</div>
		</div>
	);
}