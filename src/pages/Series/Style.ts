import styled, { css } from "styled-components";

export const Serie = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: auto;
		min-height: 100vh;
		width: 100%;
	`}
`;

export const SerieDivButton = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		height: 5vh;
		width: 5%;
		margin-left: 2%;
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`;

export const SerieButton = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: 100%;
		width: 100%;
		cursor: pointer;
	`}
`;

export const SerieDiv = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		height: auto;
		min-height: 80vh;
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
	`}
`;

export const SerieBody = styled.div`
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

export const SerieImg = styled.img`
	${() => css`
		height: 70%;
		width: 100%;
	`}
`;

export const SerieDivMenu = styled.div`
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

export const SerieButtonMenu = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.background2};
		height: 100%;
		width: 80%;
		cursor: pointer;
	`}
`;
