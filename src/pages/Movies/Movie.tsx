import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Api } from "../../data/api/api";
import { Path } from "../../types/routes";
import * as Style from "./Style";
import { Card } from "./types/movieCard";

export function Movie() {
	const [movie, setMovie] = useState<Card[]>([]);
	const [control, setControl] = useState(false);
	const navigate = useNavigate();

	async function getMovies() {
		const response = await Api.getMovie();
		setMovie(response);
	}

	async function deleteMovie(id: string) {
		const response = await Api.deleteMovie(id);
		if (response) {
			render();
		}
	}

	function render() {
		setControl(!control);
	}

	useEffect(() => {
		getMovies();
	}, [control]);

	return (
		<Style.MovieDiv>
			<Style.movieDivButton>
				<Style.movieButton
					onClick={() => {
						navigate(Path.HOME);
					}}
				>
					Back
				</Style.movieButton>
			</Style.movieDivButton>
			<Style.movieBody>
				{movie.map((item, index) => (
					<Style.movieCard key={index}>
						<h4>{item.title}</h4>
						<Style.movieImg src={item.image} alt="img" />
						<p>{item.description}</p>
						<p>{item.rating}</p>
						<Style.MovieDivMenu>
							<Style.MovieButtonMenu
								onClick={() => {
									navigate(Path.FORM_MOVIE_UPDATE + item.id);
								}}
							>
								Refresh
							</Style.MovieButtonMenu>
							<Style.MovieButtonMenu
								onClick={() => {
									deleteMovie(item.id);
								}}
							>
								Remove
							</Style.MovieButtonMenu>
						</Style.MovieDivMenu>
					</Style.movieCard>
				))}
			</Style.movieBody>
		</Style.MovieDiv>
	);
}
