import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Api } from "../../data/api/api";
import { Path } from "../../types/routes";
import * as Style from "./Style";
import { Card } from "./types/serieCard";

export function Serie() {
	const navigate = useNavigate();
	const [serie, setSerie] = useState<Card[]>([]);
	const [control, setControl] = useState(false);

	async function getAllSerie() {
		const response = await Api.getSerie();
		setSerie(response);
	}

	async function deleteCardSerie(id: string) {
		const response = await Api.deleteSerie(id);
		if (response) {
			render();
		}
	}

	function render() {
		setControl(!control);
	}

	useEffect(() => {
		getAllSerie();
	}, [control]);

	return (
		<Style.Serie>
			<Style.SerieDivButton>
				<Style.SerieButton
					onClick={() => {
						navigate(Path.HOME);
					}}
				>
					Back
				</Style.SerieButton>
			</Style.SerieDivButton>
			<Style.SerieDiv>
				{serie.map((item, index) => (
					<Style.SerieBody key={index}>
						<h4>{item.title}</h4>
						<Style.SerieImg src={item.image} alt="img" />
						<p>{item.description}</p>
						<p>{item.rating}</p>
						<Style.SerieDivMenu>
							<Style.SerieButtonMenu
								onClick={() => {
									navigate(Path.FORM_SERIE_UPDATE + item.id);
								}}
							>
								Refresh
							</Style.SerieButtonMenu>
							<Style.SerieButtonMenu
								onClick={() => {
									deleteCardSerie(item.id);
								}}
							>
								Remove
							</Style.SerieButtonMenu>
						</Style.SerieDivMenu>
					</Style.SerieBody>
				))}
			</Style.SerieDiv>
		</Style.Serie>
	);
}
