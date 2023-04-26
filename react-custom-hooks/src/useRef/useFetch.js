import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        console.log(user);
        setData(user);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { isError, isLoading, data };
};

export default useFetch;
