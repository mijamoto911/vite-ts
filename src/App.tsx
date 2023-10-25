import { ThemeProvider, CssBaseline } from "@mui/material";
import { Router } from "./router/Router";

import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <CssBaseline />
    </ThemeProvider>
  );
};

export { App };
