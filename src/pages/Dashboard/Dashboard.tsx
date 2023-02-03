import { DashboardTable, DashboardToolbar } from "./components";
import { DashboardProvider } from "./provider/DashboardProvider";
import { Box } from "@mui/system";

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%"
        }}
      >
        <DashboardToolbar />
        <DashboardTable />
      </Box>
    </DashboardProvider>
  );
};
