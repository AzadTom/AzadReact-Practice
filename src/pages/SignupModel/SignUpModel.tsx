import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ShowModelProp {
  children: ReactNode;
  bg: string;
  alignItems?: string;
  blur?: string;
}

function SignUpModel({
  children,
  bg,
  alignItems,
  blur: blurValue,
}: ShowModelProp) {
  useEffect(() => {
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
        alignItems: `${alignItems ? alignItems : "end"}`,
        backdropFilter: blurValue ? `blur(${blurValue})` : "blur(0px)",
        zIndex: "9999",
      }}
    >
      {children}
    </div>
  );

  return createPortal(Model, document.body);
}

export default SignUpModel;

export const HeroModel = () => {
  return (
    <section
      className={`bg-white w-full flex flex-col items-center scale-up-ver-bottom`}
      style={{
        borderTopLeftRadius: "1.2rem",
        borderTopRightRadius: "1.2rem",
      }}
    >
      <h2 className="text-[18px] text-[#333333] text-center font-normal pt-8">
        Sign up to access Doctor advice <br /> and inspiring stories
      </h2>
      <h1 className="text-[18px] text-[#F68B45] text-center font-medium my-4">
        Sign up today
      </h1>
      <HeroImgContainer />
    </section>
  );
};

const UserInputonSignUp = () => {
  const [number, setNumber] = useState<string>("");

  const handleOnClick = () => {
    alert("this works fine!");
  };

  return (
    <div className="flex items-center border rounded-[4px] bg-white overflow-hidden mx-4 -mt-2">
      <div className="flex-[0.1] px-2">
        <span>+91</span>
        <span className="ml-2 border w-[1px] h-1"></span>
      </div>
      <input
        type="number"
        value={number}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnClick();
          }
        }}
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setNumber(e.target.value);
          }
        }}
        className="w-full text-black outline-none px-4 py-2 flex-[0.8] h-[50px]"
        placeholder="9310855758"
      />
      <button
        disabled={number.length < 10}
        className={`flex-[0.1]  p-4  flex justify-center items-center w-full h-full rounded-[4px] m-[2px] ${
          number.length === 10 ? "bg-[#367E8A]" : "bg-[#c4c4c4]"
        }`}
        onClick={handleOnClick}
      >
        submit
      </button>
    </div>
  );
};

const HeroImgContainer = () => {
  return (
    <div className="w-full h-full sm:max-w-xs">
      <div className="w-full h-full flex justify-center relative">
        <div
          className="absolute top-0 left-0 right-0 h-8"
          style={{ background: "linear-gradient(#ffffff,transparent)" }}
        ></div>
        <img
          src="https://parntune-assets.b-cdn.net/signup-popup/popup.png"
          alt="signup-popup-img"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-4 left-0 right-0">
          <UserInputonSignUp />
        </div>
        <h2 className="absolute bottom-0 left-0 text-[15px] font-medium text-center mx-4 mb-4 text-white z-50">
          <span className="text-[#FFC107]">5 Mn+ parents </span>are on Parentune
          for parenting advice. Join the community now
        </h2>
        <div
          className="absolute bottom-0 left-0 right-0 w-full h-[106px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};
