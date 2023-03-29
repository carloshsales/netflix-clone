import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Path } from "../../types/routes";
import arrow from "../../assets/images/arrow.png";

type teste = {
	image: string;
};

export function Home() {
	const navigate = useNavigate();

	const [stateMovie, setStateMovie] = useState<teste[]>([]);
	const [stateAnime, setStateAnime] = useState<teste[]>([]);
	const [stateSerie, setStateSerie] = useState<teste[]>([]);

	function logout() {
		localStorage.removeItem("token");
		navigate(Path.LOGIN);
	}

	useEffect(() => {
		fetch("http://localhost:5173/static/movies.json")
			.then((res) => res.json())
			.then(setStateMovie);

		fetch("http://localhost:5173/static/series.json")
			.then((res) => res.json())
			.then(setStateSerie);

		fetch("http://localhost:5173/static/animes.json")
			.then((res) => res.json())
			.then(setStateAnime);
	}, []);

	return (
		<Style.Home>
			<Style.HomeLogoutDiv>
				<Style.HomeLogoutButton onClick={logout}>
					Logout
				</Style.HomeLogoutButton>
			</Style.HomeLogoutDiv>
			<Style.PageHome>
				<h3>Movies</h3>
				<Style.carouselHomeMovie>
					<Style.whapperHomeMovie>
						<Style.arrowMovie src={arrow} alt="arrow" />
						<Style.carousel>
							{stateMovie.map((item) => {
								console.log(item);
								return (
									<Style.carouselItem
										src={item.image}
										alt="img"
									/>
								);
							})}
						</Style.carousel>
						<Style.arrowRightMovie src={arrow} alt="arrow" />
					</Style.whapperHomeMovie>
				</Style.carouselHomeMovie>
				<h3>Series</h3>
				<Style.carouselHomeMovie>
					<Style.whapperHomeMovie>
						<Style.arrowLeghtSerie src={arrow} alt="arrow" />
						<Style.carousel>
							{stateSerie.map((item) => (
								<Style.carouselItem
									src={item.image}
									alt="img"
								/>
							))}
						</Style.carousel>
						<Style.arrowRightSerie src={arrow} alt="arrow" />
					</Style.whapperHomeMovie>
				</Style.carouselHomeMovie>
				<h3>Animes</h3>
				<Style.carouselHomeMovie>
					<Style.whapperHomeMovie>
						<Style.arrowLeghtAnime src={arrow} alt="arrow" />
						<Style.carousel>
							{stateAnime.map((item) => (
								<Style.carouselItem
									src={item.image}
									alt="img"
								/>
							))}
						</Style.carousel>
						<Style.arrowRightAnime src={arrow} alt="arrow" />
					</Style.whapperHomeMovie>
				</Style.carouselHomeMovie>
			</Style.PageHome>
			<Style.Menu>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.FORM);
					}}
				>
					Create profile
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.PROFILE);
					}}
				>
					Profile
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.FORM_MOVIE);
					}}
				>
					Add move
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.MOVIES);
					}}
				>
					All movies
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.FORM_SERIE);
					}}
				>
					Add series
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.SERIES);
					}}
				>
					All series
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.FORM_ANIME);
					}}
				>
					Add anime
				</Style.MenuHomeDiv>
				<Style.MenuHomeDiv
					onClick={() => {
						navigate(Path.ANIMES);
					}}
				>
					All animes
				</Style.MenuHomeDiv>
			</Style.Menu>
		</Style.Home>
	);
}
