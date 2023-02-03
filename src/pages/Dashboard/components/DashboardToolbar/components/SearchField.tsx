import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DashboardContext } from "pages/Dashboard/provider/DashboardProvider";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {
  FormControl,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";

export const SearchField = () => {
  const [searchError, setSearchError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useContext(DashboardContext);

  const handleChange = (e: any) => {
    const regex = new RegExp(/[^0-9]/);
    if (e.target.value.match(regex)) {
      setSearchError("It is not a number!");
      e.target.value = "";
    } else {
      searchParams.set("id", e.target.value);
      searchParams.delete("page");
      setSearchParams(searchParams);
      setSearchError("");
    }
  };

  const handleReset = () => {
    searchParams.delete("id");
    setSearchParams(searchParams);
  };

  return (
    <FormControl variant="standard" sx={{ ml: 1 }}>
      <TextField
        value={id}
        id="standard-search"
        label="Search by ID"
        onChange={handleChange}
        error={searchError ? true : false}
        helperText={searchError}
        onBlur={() => setSearchError("")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {id && (
                <IconButton
                  aria-label="clear search result"
                  onClick={handleReset}
                  edge="end"
                  data-testid="clear-btn"
                >
                  <ClearRoundedIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};
