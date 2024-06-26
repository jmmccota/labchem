import Routes from "./components/router.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { AppProvider } from "./components/app.context";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";
import "@fontsource/roboto/300.css";
import { fallbackRender } from "./components/error.component";

axios.defaults.baseURL = import.meta.env.PROD ? "/labchem/" : "/";

const queryClient = new QueryClient();

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  })
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            {import.meta.env.DEV && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
            <Routes />
          </AppProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
