import { Fragment } from "react/jsx-runtime";
import "./styles.modules.css";

const TransitionPage = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-8">
      <NavigationSubMenuTransition />
      <GalleryTransition />


      <div className="fixed bottom-4 right-4">
      <Transition1 />
      </div>
    </section>
  );
};

export default TransitionPage;

const Transition1 = () => {
  return (
    <div className="size-[80px] bg-white rounded-full cursor-pointer transition-all duration-100  ease-in-out hover:bg-red-600  hover:rounded-full" />
  );
};

const NavigationSubMenuTransition = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="has-submenu">
            <a href="#">Services</a>
            <ul>
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
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const GalleryTransition = () => {
  return (
    <ul className="mt-4 grid grid-cols-3 gap-6">
      {Array.from({ length: 9 }, (_: unknown, index: number) => (
        <Fragment key={index}>
          <li className="w-full h-full">
            <figure>
              <a href="#">
                <img src="/gallery-1.jpg" alt="Great Barrier Reef, Australia" className="h-[600px] object-cover" />
              </a>
              <figcaption className="">
                <main className="">
                  <p>9-day trip</p>
                  <h3>
                    Great Barrier Reef, <em>Australia</em>
                  </h3>
                  <p>
                    Dive into the vibrant underwater world of the Great Barrier
                    Reef, a UNESCO World Heritage Site teeming with marine life.
                  </p>
                </main>

                <footer>
                  <div>
                    <p>From</p>
                    <p>€2,500</p>
                  </div>

                  <img src="/icon-arrow-right-color.svg" alt="Icon" />
                </footer>
              </figcaption>
            </figure>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};
