import { useContext } from "react";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import { AlertMessage } from "components";
import {
  DashboardBody,
  DashboardHead,
  DashboardPagination,
  DashboardModal,
} from "./components";
import { TableContainer, Table, Paper, Box } from "@mui/material";

export const DashboardTable = () => {
  const { data, id, showProduct } = useContext(DashboardContext);

  return (
    <Box sx={{ width: "100%" }}>
      {data?.data ? (
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 250 }} aria-labelledby="tableTitle">
              <DashboardHead />
              <DashboardBody />
            </Table>
          </TableContainer>
          {!id && <DashboardPagination />}
        </Paper>
      ) : (
        <AlertMessage severity={"info"} type={"emptyData"} />
      )}
      {showProduct ? <DashboardModal /> : null}
    </Box>
  );
};
