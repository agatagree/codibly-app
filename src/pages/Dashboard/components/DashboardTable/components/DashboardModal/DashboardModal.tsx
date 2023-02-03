import { useContext } from "react";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import { SingleProduct } from "./SingleProduct";
import { Fade, Modal, Paper } from "@mui/material";

export const DashboardModal = () => {
  const { showProduct, setShowProduct } = useContext(DashboardContext);

  return (
    <Modal
      aria-labelledby="choosen-product"
      open={showProduct ? true : false}
      onClose={() => setShowProduct(0)}
    >
      <Fade in={showProduct ? true : false}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 250, md: 400 },
            boxShadow: 24,
            p: 4,
          }}
        >
          <SingleProduct />
        </Paper>
      </Fade>
    </Modal>
  );
};
