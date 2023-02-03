import { ColorTypes } from "utils/Types";
import { TableRow, TableCell } from "@mui/material";

export const DashboardRow = ({ product }: { product: ColorTypes }) => {
  return (
    <>
      {product ? (
        <TableRow key={product.id} sx={{ background: product.color }}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.year}</TableCell>
        </TableRow>
      ) : null}
    </>
  );
};
