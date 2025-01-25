import { Fragment } from "react/jsx-runtime";
import { Button, Button as ReButton } from "../../components/ui/Button/Button";
import GoBack from "../../components/Utils/GoBack";

const ButtonPage = () => {
  return (
    <Fragment>
      <GoBack />
      <section className="max-w-[1000px] mt-4 mx-auto flex flex-wrap gap-4 px-4">
        <Button className="px-2.5 py-1 text-xs bg-[#006239] text-white rounded-full border border-[#0d7b4c] hover:bg-[#287150] hover:border-[#38b77e]">
          Start your project
        </Button>
        <ReButton className="bg-pink-600 border border-pink-900 hover:bg-pink-400 hover:border-pink-400 text-[14px] font-medium rounded-full">
          Munna Bhaiya
        </ReButton>
      </section>
    </Fragment>
  );
};

export default ButtonPage;
