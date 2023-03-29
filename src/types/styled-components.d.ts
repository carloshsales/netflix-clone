import { themStyle } from "../assets/styles/themeStyle";

type Theme = typeof themStyle;

declare module "styled-components" {
	export interface defaultStyle extends Theme {}
}
