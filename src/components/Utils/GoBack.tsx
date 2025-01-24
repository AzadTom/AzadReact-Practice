import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../../assets/icons";
import { Button } from "../ui/Button/Button";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1000px] mt-4 py-4 mx-auto flex items-center ">
      <BackArrowIcon />
      <Button
        onClick={() => navigate(-1)}
        className="text-sm text-[#7c7c7c] hover:text-white bg-[#121212] hover:bg-[#121212]"
      >
        Back
      </Button>
    </div>
  );
};

export default GoBack;
