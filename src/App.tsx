import Routes from './router.component';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as ThemeProvider2,
} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import { AppProvider } from './components/app.context';

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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
          <Routes />
        </AppProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
