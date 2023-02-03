import { useEffect, useState } from "react";
import { DataTypes } from "utils/Types";

export const useFetch = (url: string) => {
  const [data, setData] = useState<DataTypes | undefined>();
  const [load, setLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url).then(
      (result) => {
        setLoad(false);
        setError(null);
        result.json().then((data) => setData(data));
      },
      (error) => {
        setLoad(false);
        setError(error.message);
      }
    );
  }, [url]);

  return { data, error, load };
};
