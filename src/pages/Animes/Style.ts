import styled, { css } from "styled-components";

export const AnimeDiv = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: auto;
		min-height: 100vh;
		width: 100%;
		padding-top: 1.5rem;
	`}
`;

export const animeBody = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		margin: 0 auto;
		height: auto;
		min-height: 80vh;
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
		text-align: center;
	`}
`;

export const animeCard = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background2};
		height: 40vh;
		width: 30%;
		margin: 1rem auto;
		text-align: center;
		border-radius: 0.2rem;
		padding: 0.5rem;
	`}
`;

export const animeImg = styled.img`
	width: 100%;
	height: 70%;
`;

export const animeDivButton = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: 5vh;
		width: 5%;
		padding: 0 0 0 1rem;
	`}
`;

export const animeButton = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		height: 100%;
		width: 100%;
		cursor: pointer;
	`}
`;

export const AnimeDivMenu = styled.div`
	${() => css`
		height: 20px;
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin: 0 auto;
	`}
`;

export const AnimeButtonMenu = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.background2};
		height: 100%;
		width: 80%;
		cursor: pointer;
	`}
`;
