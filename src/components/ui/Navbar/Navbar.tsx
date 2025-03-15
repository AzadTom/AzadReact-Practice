import { useNavigate } from "react-router-dom";
import { NavigationSubMenuTransition } from "../../../pages/TransitionPage/TransitionPage";
import AnimatedNavigation from "../../AnimatedNavigation/AnimatedNavigation";

const NavBar = () => {

  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 p-4 bg-pink-900 border border-pink-600 flex items-center justify-between">
      <div className="max-w-[max-content] text-[18px] sm:text-[34px] font-bold cursor-pointer" onClick={()=> navigate("/")}>
        ReactJS Practice
      </div>
      <div className="z-[9999]">
        <NavigationSubMenuTransition/>
      </div>
     <div className="z-[9999]">
     <AnimatedNavigation/>
     </div>
    </nav>
  );
};

export default NavBar;
