import { useContext } from "react";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import { ColorTypes } from "utils/Types";
import { TableRow, TableCell } from "@mui/material";

export const DashboardRow = ({ product }: { product: ColorTypes }) => {
  const { setShowProduct } = useContext(DashboardContext);

  return (
    <>
      {product ? (
        <TableRow
          hover
          onClick={() => setShowProduct(product.id)}
          key={product.id}
          sx={{ background: product.color, cursor: "pointer" }}
        >
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.year}</TableCell>
        </TableRow>
      ) : null}
    </>
  );
};
