import { TableHead, TableRow, TableCell } from "@mui/material";

export const DashboardHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Year</TableCell>
      </TableRow>
    </TableHead>
  );
};
