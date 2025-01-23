import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ShowModelProp {
  children: ReactNode;
  bg: string;
  alignItems?: string;
  blur?: string;
}

function ShowModel({ children, bg, alignItems, blur }: ShowModelProp) {
  useEffect(() => {
    // window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const Model = (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: bg,
        display: "flex",
        justifyContent: "center",
        backdropFilter: blur ? `blur(${blur})` : ``,
        alignItems: alignItems ? alignItems : "center",
        zIndex: "9999",
      }}
    >
      <div className="model">{children}</div>
    </div>
  );

  return createPortal(Model, document.body);
}

export default ShowModel;
