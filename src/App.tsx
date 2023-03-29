import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { themStyle } from "./assets/styles/themeStyle";
import { Router } from "./router";

const query = new QueryClient();

export function App() {
	return (
		<ThemeProvider theme={themStyle}>
			<BrowserRouter>
				<QueryClientProvider client={query}>
					<Router />
				</QueryClientProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}
