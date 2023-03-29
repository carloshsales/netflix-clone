import Styled, { css } from "styled-components";

export const MovieDiv = Styled.div`
${({ theme }) => css`
	background-color: ${theme.colors.background1};
	height: auto;
	min-height: 100vh;
	width: 100%;
	padding: 2rem;
`}
`;

export const movieBody = Styled.div`
${({ theme }) => css`
	background-color: ${theme.colors.background2};
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	height: auto;
	min-height: 80vh;
	width: 80%;
	padding: 0.5rem;
`}
`;

export const movieCard = Styled.div`
${({ theme }) => css`
	background-color: ${theme.colors.background3};
	height: 40vh;
	width: 30%;
	margin: 1rem auto;
	text-align: center;
	border-radius: 0.2rem;
	padding: 0.5rem;
`}
`;

export const movieImg = Styled.img`
height: 70%;
width: 100%;
`;

export const movieDivButton = Styled.div`
${({ theme }) => css`
	height: 5vh;
	width: 10%;
	background-color: ${theme.colors.background1};
`}
`;

export const movieButton = Styled.button`
${({ theme }) => css`
	background-color: ${theme.colors.background3};
	height: 100%;
	width: 100%;
`}
`;

export const MovieDivMenu = Styled.div`
${({ theme }) => css`
	background-color: ${theme.colors.background3};
	height: 20px;
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin: 0 auto;
`}
`;

export const MovieButtonMenu = Styled.button`
${({ theme }) => css`
	background-color: ${theme.colors.background2};
	height: 100%;
	width: 80%;
	cursor: pointer;
`}
`;

export const movieUpdateForm = Styled.form`
${({ theme }) => css`
	background-color: ${theme.colors.background2};
	height: 60vh;
	width: 40%;
	margin: 5rem auto 0;
	text-align: center;
	padding-top: 4rem;
`}
`;

export const movieUpdateInput = Styled.input`
margin-top: 1rem;
height: 30px;
width: 80%;
border-radius: .3rem;
`;

export const movieUpdateDivButton = Styled.div`
height: 3vh;
width: 20%;
margin: 2rem auto;
`;

export const movieUpdateButton = Styled.button`
${({ theme }) => css`
	background-color: ${theme.colors.background3};
	height: 100%;
	width: 100%;
	cursor: pointer;
`}
`;
