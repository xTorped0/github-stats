import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { userService } from '@/services/user.service';

export function useUserProjects() {
	const { userId } = useParams();

	const { data, isPending, error } = useQuery({
		queryKey: ['userProjects', userId],
		queryFn: () => userService.getRepositories(userId!)
	})
	//S
	return { data, isPending, error };
}
