import { useContext } from "react";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import { Loader } from "components";
import { DashboardRow } from "./DashboardRow";
import { TableRow, TableCell, TableBody } from "@mui/material";

export const DashboardBody = () => {
  const { data, page, rowsPerPage } = useContext(DashboardContext);

  const emptyRows = data
    ? page > 0
      ? Math.max(0, page * rowsPerPage - data.total)
      : 0
    : 0;

  return (
    <>
      {data ? (
        <TableBody>
          {Array.isArray(data?.data)
            ? data?.data.map((product, index) => {
                return <DashboardRow product={product} key={index} />;
              })
            : [data?.data].map((product, index) => {
                return <DashboardRow product={product} key={index} />;
              })}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      ) : (
        <Loader />
      )}
    </>
  );
};
