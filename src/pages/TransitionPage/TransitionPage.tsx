import "./styles.modules.css";
import GalleryTransition from "../../components/GalleryTransition/GalleryTransition";
import GalleryScrollTransition from "../../components/GalleryTransition/GalleryScrollTransition";
import { TextOpacityTransition } from "../../components/TextOpacityTransition/TextOpacityTransition";
import AnimatedMenu from "../../components/AnimatedMenu/AnimatedMenu";

const TransitionPage = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-8">
      <div className="z-10 mt-12">
        <div className="w-full bg-white h-[600px]">
          <AnimatedMenu/>
        </div>
        <GalleryTransition />
        <GalleryScrollTransition />
        <TextOpacityTransition />
      </div>
    </section>
  );
};

export default TransitionPage;

export const NavigationSubMenuTransition = () => {
  return (
    <header className="mx-6">
      <nav>
        <ul>
          <li className="has-submenu">
            <a href="#">Services</a>
            <ul className="z-50">
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">eCommerce</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
            </ul>
          </li>
          <li className="hidden sm:block">
            <a href="#">Company</a>
          </li>
          <li className="hidden sm:block">
            <a href="#">Blog</a>
          </li>
          <li className="hidden sm:block">
            <a href="#">Careers</a>
          </li>
          <li className="hidden sm:block">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
