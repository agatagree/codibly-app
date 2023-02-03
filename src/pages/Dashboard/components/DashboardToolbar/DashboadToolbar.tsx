import { Link } from "react-router-dom";
import { SearchField } from "./components/SearchField";
import { Toolbar, Typography } from "@mui/material";

export const DashboardToolbar = () => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        Products
      </Typography>
      <SearchField />
    </Toolbar>
  );
};
