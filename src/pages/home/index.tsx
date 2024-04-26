import { Button, Input } from '@mui/material';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

export function HomePage() {
	const navigate = useNavigate();
	
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const data = new FormData(e.target);
		const userId = data.get('username') as string;

		navigate(`./${userId}`);
	}

	return (
		<div className={styles.home}>
			<h1 className={styles.title}> 
				MY GITHUB RÉSUMÉ 
			</h1>

			<p className={styles.description}>
				Welcome to my GitHub Résumé! This is a simple web application that displays GitHub user information and statistics.
			</p>

			<form className={styles.search} onSubmit={onSubmit}>
				<Input 
					name="username"
					placeholder="Enter a GitHub username" 
					fullWidth 
					required 
				/>
				<Button 
					variant="contained" 
					color="primary" 
					type='submit'	
				> 
					Search 
				</Button>
			</form>
		</div>
	)
}