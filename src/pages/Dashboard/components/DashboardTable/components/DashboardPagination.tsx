import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import { TablePagination } from "@mui/material";

export const DashboardPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, page, rowsPerPage } = useContext(DashboardContext);

  const handleChangePage = (event: unknown, newPage: number) => {
    searchParams.set("page", (newPage + 1).toString());
    setSearchParams(searchParams);
  };

  return (
    <TablePagination
      component="div"
      count={data?.total ? data.total : 0}
      rowsPerPage={rowsPerPage}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPageOptions={[]}
    />
  );
};
