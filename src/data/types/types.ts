export type LoginRequest = {
	email: string;
	password: string;
};

export type profileRequest = {
	userEmail: string;
	movie: string;
	serie: string;
	anime: string;
};

export type CardRequest = {
	title: string;
	description: string;
	rating: number;
	image: string;
};

export type CardDataRequest = {
	id?: string;
	title: string;
	description: string;
	rating: number;
	image: string;
};

export type UserRequest = {
	name: string;
	cpf: string;
	email: string;
	age: number;
	role: string;
	password: string;
	confirmPassword: string;
};
