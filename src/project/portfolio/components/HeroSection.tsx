import TiltText, { AnimatedLogo } from "./TiltText";

export default function HeroSection() {
  return (
    <section className="w-full h-screen p-7 bg-white">
      <div className="shadow-lg shadow-gray-400 w-full h-full p-10 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1857,h_1040,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-center bg-cover rounded-[50px]">
        <Icon />
        <TiltText />
        <BottomText />
      </div>
    </section>
  );
}

const BottomText = () => {
  return (
    <div className="absolute w-full bottom-0 left-0 right-0 p-12 flex justify-between">
      <div>
        <h2 className="text-xl font-semibold">BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className="font-extralight text-xl">FREELANCE</h3>
      </div>
     <AnimatedLogo/>
    </div>
  );
};

function Icon() {
  return (
    <svg
      data-bbox="0 0 1608 1279"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1608 1279"
      height={100}
      width={100}
      data-type="color"
      aria-label="Anzo.Studio Brand Identity and Logo Design"
    >
      <defs>
        <style />
      </defs>
      <g fill="#FAFAFA">
        <path
          d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439zM1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19z"
          data-color={1}
        />
      </g>
    </svg>
  );
}
