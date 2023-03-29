import styled, { css } from "styled-components";

export const Home = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors.background2};
		height: 100vh;
		width: 100%;
	`}
`;

export const PageHome = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background1};
		height: 100%;
		width: 80%;
	`}
`;

export const carouselHomeMovie = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background2};
		height: 25%;
		width: 100%;
	`}
`;

export const whapperHomeMovie = styled.div`
	width: 100%;
	font-size: 0;
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
`;

export const chevronRightMovie = styled.img`
	${({ theme }) => css`
  top: 15%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const chevronLeghtMovie = styled.img`
	${({ theme }) => css`
  top: 15%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: -5px;
`}
`;

export const carousel = styled.div`
	font-size: 0;
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
`;

export const carouselItem = styled.img`
	height: 240px;
	object-fit: cover;
	width: calc(20%);
	margin-left: 0px;
`;

export const chevronRightSerie = styled.img`
	${({ theme }) => css`
  top: 40%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const chevronLeghtSerie = styled.img`
	${({ theme }) => css`
  top: 40%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: -5px;
`}
`;

export const chevronRightAnime = styled.img`
	${({ theme }) => css`
  top: 70%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const chevronLeghtAnime = styled.img`
	${({ theme }) => css`
  top: 70%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: -5px;
`}
`;

export const Menu = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.background3};
		height: 100%;
		width: 20%;
		text-align: center;
		padding-top: 2rem;
	`}
`;

export const MenuHomeDiv = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.primaryColor};
		height: 9vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
		cursor: pointer;
	`}
`;

export const MenuItem = styled.button`
	${({ theme }) => css`
		border: none;
		font-family: ${theme.source.fontFamily};
		background-color: ${theme.colors.primaryColor};
	`}
`;

export const HomeLogoutDiv = styled.div`
	${({ theme }) => css`
		height: 3vh;
		width: 5%;
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 0.5rem;
	`}
`;
export const HomeLogoutButton = styled.button`
	margin-top: 0.5rem;
	padding: 0.3rem;
	cursor: pointer;
`;
