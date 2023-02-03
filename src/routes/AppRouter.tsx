import { Routes, Route } from "react-router-dom";
import { Dashboard } from "pages";
import { AlertMessage } from "components";
import { Container } from "@mui/material";

export const AppRouter = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<AlertMessage type={"pageNotFound"} />} />
      </Routes>
    </Container>
  );
};
