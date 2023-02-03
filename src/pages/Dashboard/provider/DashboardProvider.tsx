import { createContext, ReactNode, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_URL } from "api/consts";
import { Loader, AlertMessage } from "components";
import { useFetch } from "hooks/useFetch";
import { DataTypes } from "utils/Types";

type ContextTypes = {
  data: DataTypes | undefined;
  id: string;
  page: number;
  rowsPerPage: 5;
  error: string | null;
  showProduct: number;
  setShowProduct: (value: number) => void;
};

export const initialState: ContextTypes = {
  data: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
    support: {
      url: "",
      text: "",
    },
  },
  page: 1,
  rowsPerPage: 5,
  id: "",
  error: null,
  showProduct: 0,
  setShowProduct: () => {},
};

export const DashboardContext = createContext<ContextTypes>(initialState);

const rowsPerPage = 5;

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [showProduct, setShowProduct] = useState(0);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, error, load } = useFetch(
    `${API_URL}/${id}?per_page=${rowsPerPage}&page=${page}`
  );

  if (load) {
    return <Loader />;
  }
  if (error) {
    return <AlertMessage severity={"error"} />;
  }
  if (data && page > Math.ceil(data?.total / rowsPerPage)) {
    return <AlertMessage severity={"error"} type={"pageNotFound"} />;
  }
  return (
    <DashboardContext.Provider
      value={{
        data,
        id,
        page,
        rowsPerPage,
        error,
        showProduct,
        setShowProduct,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
