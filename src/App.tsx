import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes/AppRouter";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "style/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box sx={{ bgcolor: "secondary.main", minHeight: "100vh", py: 4 }}>
          <AppRouter />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};
