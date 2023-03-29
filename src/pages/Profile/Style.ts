import styled, { css } from "styled-components";

export const profileDiv = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		height: 100vh;
		width: 100%;
	`}
`;

export const profileHeader = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background2};
		height: 20vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`;

export const profilebuttonSair = styled.button`
	${({ theme }) => css`
		margin-left: 1rem;
	`}
`;

export const profileBody = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		padding: 1rem;
	`}
`;

export const profileElement = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: auto;
		min-height: 5vh;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	`}
`;

export const profileCard = styled.div`
	${({ theme }) => css`
		border: solid 2px ${theme.colors.background2};
		border-radius: 0.3rem;
		height: 30vh;
		width: 25%;
		text-align: center;
		background-color: ${theme.colors.primaryColor};
	`}
`;

export const profileImg = styled.img`
	${({ theme }) => css`
		width: 200px;
		height: 20vh;
	`}
`;
