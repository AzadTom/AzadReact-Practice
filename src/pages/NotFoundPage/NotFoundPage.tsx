import { useState } from "react";
import ShowModel from "../../components/ModelSheet/ShowModel";

const NotFoundPage = () => {
  const [state, setState] = useState(false);
  return (
    <>
      {state && (
        <ShowModel bg="#F0F0F0">
          <div className="bg-slate-950 max-w-[300px] text-white px-4 py-2 rounded-md">
            <h2 className="text-lg font-medium">Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              perferendis placeat quas nesciunt beatae rerum error nulla quod
              dolorum magnam reiciendis sapiente ratione voluptas hic, esse
              corporis ea possimus, eligendi atque, debitis quasi.
            </p>
            <div className="flex justify-between items-center my-2">
              <button className="px-4 py-2 border ">Thank You</button>
              <button
                className="px-4 py-2 bg-black border"
                onClick={() => setState(!state)}
              >
                Close
              </button>
            </div>
          </div>
        </ShowModel>
      )}
      <main>
        <section className="flex justify-center items-center h-screen">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-8xl">404 PAGE</h2>
            <button
              className="px-4 py-2 bg-blue-600 rounded-md text-white font-medium"
              onClick={() => setState(true)}
            >
              Click Me
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
