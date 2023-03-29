import { FormEvent } from "react";

export interface InputProps<T = FormEvent<HTMLFormElement>> {
	type: string;
	name: string;
	defaultValue: string;
	onSubmit: (value: T) => void;
}
