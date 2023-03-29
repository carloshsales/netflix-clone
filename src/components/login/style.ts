import styled, { css } from "styled-components";

export type StyledForm = {
	error: boolean;
};

export const Body = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors.background1};
		height: 100vh;
		width: 100%;
		font-family: ${theme.source.fontFamily};
	`}
`;

export const Login = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		color: #d4d4d4;
		height: 60vh;
		width: 30%;
		border-radius: 16px;
		margin: 0 auto;
		background-color: ${theme.colors.background3};
	`}
`;

export const Form = styled.form<StyledForm>`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 10rem;
	text-align: center;
	height: 99%;
	width: 99%;
	border: ${(props) => (props.error ? "2px solid red" : "2px solid")};
	border-radius: 16px;
	background-color: ${(props) => props.theme.colors.background2};
`;

export const Register = styled.div`
	${() => css`
		text-align: center;
		font-weight: 700;
		margin-top: 2rem;
	`}
`;

export const ButtonRegister = styled.button`
	${({ theme }) => css`
		font-family: ${theme.source.fontFamily};
		font-size: ${theme.source.fontSize};
		border: 2px solid red;
		boder-radius: 16px;
		padding: 0.5rem 1rem;
		background: ${theme.colors.background1}
		cursor: pointer;
	`}
`;

export const DivButtonInput = styled.button`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
`;
