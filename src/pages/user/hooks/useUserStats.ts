import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function useUserStats() {
	const { userId } = useParams();
	const { data, isPending, error } = useQuery({
		queryKey: ['userStats', userId],
		queryFn: () => userService.getLanguageStats(userId!),
	});

	return { data, isPending, error };
}