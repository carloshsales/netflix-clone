import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Select } from "../../components/options/select";
import { Api } from "../../data/api/api";
import { Path } from "../../types/routes";
import * as Style from "./Style";
import { Animes, Movies, Series } from "./types/types";

export function Profile() {
	const [selectValue, setSelectValue] = useState<string>("");
	const [movie, setMovie] = useState<Movies[]>([]);
	const [serie, setSerie] = useState<Series[]>([]);
	const [anime, setAnime] = useState<Animes[]>([]);
	const navigate = useNavigate();

	const options = ["Movies", "Series", "Animes"];

	async function getProfileMovies() {
		const data = await Api.getMovie();
		setMovie(data);
	}

	async function getProfileSeries() {
		const data = await Api.getSerie();
		setSerie(data);
	}

	async function getProfileNamine() {
		const data = await Api.getAnime();
		setAnime(data);
	}

	useEffect(() => {
		getProfileMovies();
		getProfileSeries();
		getProfileNamine();
	}, []);

	return (
		<Style.profileDiv>
			<Style.profileHeader>
				<h1>User profile</h1>
			</Style.profileHeader>
			<Style.profilebuttonSair
				onClick={() => {
					navigate(Path.HOME);
				}}
			>
				Back
			</Style.profilebuttonSair>
			<Style.profileBody>
				<Select options={options} selectOptions={setSelectValue} />
				{selectValue === "Movies" && (
					<>
						{movie.map((item) => {
							return (
								<Style.profileElement key={item.id}>
									<Style.profileCard>
										<h3>{item.title}</h3>
										<Style.profileImg
											src={item.image}
											alt="img"
										/>
										<p>{item.description}</p>
										<p>{item.rating}</p>
									</Style.profileCard>
								</Style.profileElement>
							);
						})}
					</>
				)}
				{selectValue === "Series" && (
					<>
						{serie.map((item) => {
							return (
								<Style.profileElement key={item.id}>
									<Style.profileCard>
										<h3>{item.title}</h3>
										<Style.profileImg
											src={item.image}
											alt="img"
										/>
										<p>{item.description}</p>
										<p>{item.rating}</p>
									</Style.profileCard>
								</Style.profileElement>
							);
						})}
					</>
				)}
				{selectValue === "Animes" && (
					<>
						{anime.map((item) => {
							return (
								<Style.profileElement key={item.id}>
									<Style.profileCard>
										<h3>{item.title}</h3>
										<Style.profileImg
											src={item.image}
											alt="img"
										/>
										<p>{item.description}</p>
										<p>{item.rating}</p>
									</Style.profileCard>
								</Style.profileElement>
							);
						})}
					</>
				)}
			</Style.profileBody>
		</Style.profileDiv>
	);
}
