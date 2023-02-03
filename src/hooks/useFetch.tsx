import { useEffect, useState } from "react";
import { DataTypes } from "utils/Types";

export const useFetch = (url: string) => {
  const [data, setData] = useState<DataTypes | undefined>();
  const [load, setLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url).then(
      (result) => {
        if (!result.ok) {
          setError(`${result.status}`);
        }
        result.json().then((data) => setData(data));
        setLoad(false);
        setError(null);
      },
      (error) => {
        setLoad(false);
        setError(error.message);
      }
    );
  }, [url]);

  return { data, error, load };
};
