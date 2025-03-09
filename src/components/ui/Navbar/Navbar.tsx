import { NavigationSubMenuTransition } from "../../../pages/TransitionPage/TransitionPage";
import AnimatedNavigation from "../../AnimatedNavigation/AnimatedNavigation";

const NavBar = () => {
  return (
    <nav className="sticky top-0 p-4 bg-pink-900 border border-pink-600 flex items-center justify-between">
      <div className="max-w-[max-content] text-[18px] sm:text-[34px] font-bold">
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
