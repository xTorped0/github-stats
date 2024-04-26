import { errorCatch } from "@/api/error";
import Loader from "../loader/Loader";

export function WithRequest(props: { error: Error | null, isPending: boolean }) {
	const { error, isPending } = props;
	return (
		<>
			{ isPending && <Loader /> }
			{ error && <p>Error: {errorCatch(error)}</p> }
		</>
	)
}