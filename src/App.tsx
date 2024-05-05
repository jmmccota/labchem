import Routes from './router.component';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import { AppProvider } from './components/app.context';
import axios from 'axios';
import { ErrorBoundary } from "react-error-boundary";


axios.defaults.baseURL = import.meta.env.PROD ? '/labchem/' : '/';

const queryClient = new QueryClient();
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  })
);

function fallbackRender({ error }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
            <Routes />
          </AppProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
