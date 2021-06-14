import { createContext, useContext, useEffect, useState, FC } from "react";
import { ViewportType } from "utils";

const viewportContext = createContext({});

const ViewportProvider: FC = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = useContext(viewportContext) as ViewportType;
  return { width, height };
};

export default ViewportProvider;
