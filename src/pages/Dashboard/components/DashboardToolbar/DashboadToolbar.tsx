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
      <Typography variant="h6">Products</Typography>
      <SearchField />
    </Toolbar>
  );
};
