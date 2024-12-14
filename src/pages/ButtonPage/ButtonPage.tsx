import { Fragment } from "react/jsx-runtime";
import Button from "../../features/Button/Button";
import GoBack from "../../features/Utils/GoBack";

const ButtonPage = () => {
  return (
    <Fragment>
      <GoBack />
      <section className="max-w-[1000px] mt-4 mx-auto flex flex-wrap gap-4 px-4">
        {Array.from({ length: 50 }, (_, index: number) => {
          return (
            <Fragment key={index}>
              <Button
                text="Start your project"
                className="px-2.5 py-1 text-xs bg-[#006239] text-white rounded-md border border-[#0d7b4c] hover:bg-[#287150] hover:border-[#38b77e]"
              />
              <Button
                text="Sign in"
                className="px-2.5 py-1 text-xs bg-[#242424] text-white rounded-md border border-[#313131] hover:border-[#3c3c3c]"
              />
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};

export default ButtonPage;
