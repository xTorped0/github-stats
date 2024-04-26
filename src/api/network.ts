import axios, { type CreateAxiosDefaults } from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_GITHUB_TOKEN;

const options: CreateAxiosDefaults = {
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `token ${token}`,
	},
	withCredentials: false // Server cookies are not used
};

const network = axios.create(options);

export { network };

