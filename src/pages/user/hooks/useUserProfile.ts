import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { userService } from '@/services/user.service';

export function useUserProfile() {
	const { userId } = useParams();

	const { data, isPending, error } = useQuery({
		queryKey: ['userProfile', userId],
		queryFn: () => userService.getProfile(userId!)
	})
	//
	return { data, isPending, error };
}
