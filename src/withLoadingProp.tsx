import { ReactNode, useState, useEffect } from "react";

type withLoadingProp = {
  children: ReactNode;
};
const withLoading = (props: withLoadingProp) => {
  const { children } = props;
  const [isloadng, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  if (isloadng) {
    return <div>isLoading...</div>;
  }

  return <div>{children}</div>;
};
