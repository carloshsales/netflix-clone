import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Api } from "../../data/api/api";
import { Path } from "../../types/routes";
import * as Style from "./style";
import { FormDataProfile } from "./types/types";

export function FormAnime() {
	const navigate = useNavigate();
	const id = useParams().id?.replace(":id", "");

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data: FormDataProfile = {
			title: e.currentTarget.gameTitle.value,
			description: e.currentTarget.description.value,
			rating: Number(e.currentTarget.rating.value),
			image: e.currentTarget.image.value,
		};

		if (id) {
			const response = await Api.updateAnime(data, id);
			if (response) {
				navigate(Path.ANIMES);
			}
		} else {
			const response = await Api.createAnime(data);
			if (response) {
				navigate(Path.ANIMES);
			}
		}
	}
	return (
		<Style.Form>
			<Style.FormCard onSubmit={handleSubmit}>
				<h3>Anime</h3>
				<Style.InputCard
					type="text"
					name="gameTitle"
					placeholder="Title"
				/>
				<Style.InputCard
					type="text"
					name="description"
					placeholder="Description"
				/>
				<Style.InputCard
					type="number"
					placeholder="Rating"
					name="rating"
				/>
				<Style.InputCard type="text" placeholder="Image" name="image" />
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
			</Style.FormCard>
		</Style.Form>
	);
}
