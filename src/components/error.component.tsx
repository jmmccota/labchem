import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { FallbackProps } from "react-error-boundary";

function Component() {
  return (<Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "100vh",
      alignItems: "center",
      gap: 2
    }}
  >
    <CssBaseline />
    <Box
      component="img"
      src="./images/find-resource.svg"
      sx={{ maxWidth: 200 }}
    />
    <Typography variant="h4">Esse conteúdo não foi encontrado</Typography>
    <Typography variant="h5">
      Clique aqui para voltar para a{" "}
      <Box
        component="a"
        href="/"
        sx={{
          fontWeight: "bolder",
          "&:link": {
            textDecoration: "none",
          },
        }}
      >
        página inicial
      </Box>
    </Typography>
  </Box>);
}

export function fallbackRender({ error }: FallbackProps) {
  console.error(error);
  return (
    <Component />
  );
}

export function ErrorComponent() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <Component />
  );
}

