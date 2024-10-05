import { ReactNode } from "react";

interface SkeletonProps {
  shape: string;
  width: string;
  height: string;
  borderRadius?:string;
}

interface ShimmerLayout {
  children: ReactNode;
}

function SkeletonLayout(props: ShimmerLayout) {
  const { children } = props;
  return (
    <main>
      <section className="flex flex-col animate-pulse">{children}</section>
    </main>
  );
}

export default SkeletonLayout;

export const ShimmerShape = (props: SkeletonProps) => {
  const { shape, height, width,borderRadius } = props;

  if (shape === "rectangle") {
    return (
      <div
        className="bg-gray-300 mb-3"
        style={{ width: width, height: height }}
      ></div>
    );
  }

  if (shape === "circle") {
    return (
      <div
        className="bg-gray-300 mb-3 rounded-full"
        style={{ width: width, height: height }}
      ></div>
    );
  }

  return (
    <div
      className={`bg-gray-300 mb-3`}
      style={{ width: width, height: height,borderRadius:borderRadius}}
    ></div>
  );


};
