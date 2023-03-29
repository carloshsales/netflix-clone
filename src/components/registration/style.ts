import styled, { css } from "styled-components";

export const registration = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`}
`;

export const registrationLogin = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background2};
		color: ${theme.colors.background3};
		text-align: center;
		border-radius: 16px;
		height: 50vh;
		width: 40%;
	`}
`;

export const registrationform = styled.form`
	${() => css`
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 0 auto;
		width: 60%;
		margin-top: 3rem;
	`}
`;

export const registrationDivButton = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 8vh;
		background-color: ${theme.colors.background2};
		margin: 1rem auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 8px;
	`}
`;

export const registrationButton = styled.button`
	${({ theme }) => css`
		height: 50%;
		width: 100%;
		border-radius: 16px;
		border: 2px solid ${theme.colors.background1};
	`}
`;
