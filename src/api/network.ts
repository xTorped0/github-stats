import axios, { type CreateAxiosDefaults } from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const options: CreateAxiosDefaults = {
	baseURL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: false // Server cookies are not used
};

const network = axios.create(options);

export { network };

