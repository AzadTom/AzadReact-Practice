import { Fragment } from "react/jsx-runtime";

const GalleryTransition = () => {
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {Array.from({ length: 3 }, (_: unknown, index: number) => (
        <Fragment key={index}>
          <li className="w-full h-full">
            <figure>
              <a href="#">
                <img
                  src="/gallery-1.jpg"
                  alt="Great Barrier Reef, Australia"
                  className="h-[600px] object-cover"
                />
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

export default  GalleryTransition;