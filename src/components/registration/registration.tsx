import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Api } from "../../data/api/api";
import { Path } from "../../types/routes";
import * as Style from "./style";
import { User } from "./types/type";

export function Registration() {
	const navigate = useNavigate();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const user: User = {
			name: e.currentTarget.nameUser.value,
			cpf: e.currentTarget.cpf.value,
			email: e.currentTarget.email.value,
			age: Number(e.currentTarget.age.value),
			role: "user",
			password: e.currentTarget.password.value,
			confirmPassword: e.currentTarget.confirmPassword.value,
		};

		const response = await Api.createUser(user);
		if (response) {
			navigate(Path.LOGIN);
		}
	}
	return (
		<Style.registration>
			<Style.registrationLogin>
				<h3>Register</h3>
				<Style.registrationform onSubmit={handleSubmit}>
					<input
						type="text"
						name="nameUser"
						placeholder="Full name"
					/>
					<input type="text" name="cpf" placeholder="cpf" />
					<input type="text" name="email" placeholder="email" />
					<input type="number" name="age" placeholder="age" />
					<input type="text" name="password" placeholder="password" />
					<input
						type="text"
						name="confirmPassword"
						placeholder="repeat password"
					/>
					<Style.registrationDivButton>
						<Style.registrationButton type="submit">
							Submit
						</Style.registrationButton>
						<Style.registrationButton
							onClick={() => {
								navigate(Path.LOGIN);
							}}
						>
							Back
						</Style.registrationButton>
					</Style.registrationDivButton>
				</Style.registrationform>
			</Style.registrationLogin>
		</Style.registration>
	);
}
