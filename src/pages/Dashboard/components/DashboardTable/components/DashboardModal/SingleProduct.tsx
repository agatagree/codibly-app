import { useContext } from "react";
import { API_URL } from "api/consts";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import { Loader, AlertMessage } from "components";
import { useFetch } from "hooks/useFetch";
import { ColorTypes } from "utils/Types";
import { Typography, Box } from "@mui/material";

export const SingleProduct = () => {
  const { showProduct } = useContext(DashboardContext);
  const { data, error, load } = useFetch(`${API_URL}/${showProduct}`);
  const product = data?.data as ColorTypes;

  if (load) {
    return <Loader />;
  }
  if (error) {
    return <AlertMessage severity={"error"} />;
  }
  return (
    <>
      {product ? (
        <Box>
          <Typography
            id="choosen-product"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            {product.name}
          </Typography>

          <Typography>id: {product.id}</Typography>
          <Typography>color: {product.color}</Typography>
          <Typography>pantone: {product.pantone_value}</Typography>
          <Typography>year: {product.year}</Typography>
        </Box>
      ) : (
        <AlertMessage severity={"error"} />
      )}
    </>
  );
};
