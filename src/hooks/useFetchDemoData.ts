import { useEffect, useState } from "react";

function useFetchDemoData(info: string) {
  const [data, setData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getLongData = () => {
    setIsLoading(true);
    setTimeout(() => {
      for (let num = 0; num < 10000; num++) {
        console.log(num);
      }
      setData(info);
      setIsLoading(false);
    }, 1000);

  };

  useEffect(() => {
    getLongData();
  }, []);

  return {
    data: data,
    isLoading: isLoading,
  };
}

export default useFetchDemoData;
