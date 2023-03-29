import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Api } from "../../data/api/api";
import { Card } from "../../pages/Movies/types/movieCard";
import { Path } from "../../types/routes";
import * as Style from "./style";
import { FormDataProfile } from "./types/types";

export function FormMovie() {
	const [card, setCard] = useState<Card[]>([]);
	const navigate = useNavigate();

	const id = useParams().id?.replace(":id", "");

	async function getCardById() {
		if (id) {
			const response = await Api.getMovieById(id);
			setCard(response);
		}
	}

	useEffect(() => {
		getCardById();
	}, []);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const data: FormDataProfile = {
			title: e.currentTarget.gameTitle.value,
			description: e.currentTarget.description.value,
			rating: Number(e.currentTarget.rating.value),
			image: e.currentTarget.image.value,
		};
		if (id) {
			const response = await Api.updateMovie(data, id);
			console.log("log 2", response);
			if (response) {
				navigate(Path.MOVIES);
			}
		} else {
			const response = await Api.createMovie(data);
			if (response) {
				navigate(Path.MOVIES);
			}
		}
	}

	return (
		<Style.Form>
			<Style.FormCard onSubmit={handleSubmit}>
				<h3>Movies</h3>
				<Style.InputCard
					type="text"
					placeholder="Title"
					name="gameTitle"
				/>
				<Style.InputCard
					type="text"
					placeholder="Description"
					name="description"
				/>
				<Style.InputCard
					type="number"
					placeholder="ating"
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
