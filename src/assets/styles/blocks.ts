import { css } from "styled-components";

import { colors } from "./colors";
import { source } from "./sources";

const headerStyle = () => css`
	font-family: ${source.FontFamily};
	font-size: ${source.FontSize};
	background-color: ${colors.background1};
`;

const bodyStyle = () => css`
	font-family: ${source.FontFamily};
	font-size: ${source.FontSize};
	background-color: ${colors.background2};
`;

export const blocks = {
	headerStyle,
	bodyStyle,
};
