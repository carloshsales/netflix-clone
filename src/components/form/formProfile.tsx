import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Api } from "../../data/api/api";
import { Path } from "../../types/routes";
import * as Style from "./style";
import { FormInput } from "./types/types";

export function Form() {
	const navigate = useNavigate();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data: FormInput = {
			userEmail: localStorage.getItem("email") || "",
			movie: e.currentTarget.movie.value,
			serie: e.currentTarget.serie.value,
			anime: e.currentTarget.anime.value,
		};

		const response = await Api.createPorfile(data);
		if (response) {
			navigate(Path.HOME);
		}
	}

	return (
		<Style.Form>
			<Style.FormData onSubmit={handleSubmit}>
				<h2>Perfil</h2>
				<Style.inputProfile
					type="text"
					placeholder="Movie ID"
					name="movie"
				/>
				<Style.inputProfile
					type="text"
					placeholder="Serie ID"
					name="serie"
				/>
				<Style.inputProfile
					type="text"
					placeholder="Anime ID"
					name="anime"
				/>
				<Style.divbuttonformProfile>
					<Style.buttonformProfile type="submit">
						Submit
					</Style.buttonformProfile>
					<Style.buttonformProfile
						type="submit"
						onClick={() => {
							navigate(Path.HOME);
						}}
					>
						Back
					</Style.buttonformProfile>
				</Style.divbuttonformProfile>
			</Style.FormData>
		</Style.Form>
	);
}
