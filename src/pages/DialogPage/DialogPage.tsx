import { useState } from "react";
import ShowModel from "../../components/ReusableComponent/ModelSheet/ShowModel";
import CountDown from "../../components/ReusableComponent/CountDown/CountDown";
import GoBack from "../../features/Utils/GoBack";

function DialogPage() {
  const dialogColors = [
    "#F0F0F0", // Light Gray
    "#E6F7FF", // Soft Blue
    "#FFF9C4", // Pale Yellow
    "#E8F5E9", // Light Green
    "#F3E5F5", // Light Lavender
  ];

  const [state, setState] = useState<boolean>(false);

  return (
    <main className="max-w-4xl p-4 mx-auto">
      <GoBack />
      <CountDown />
      {state && (
        <ShowModel bg={dialogColors[0]}>
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
      <section className="flex flex-col gap-2 my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <div>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => setState(!state)}
          >
            Show Me
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <div>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => setState(!state)}
          >
            Show Me
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <div>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => setState(!state)}
          >
            Show Me
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <div>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => setState(!state)}
          >
            Show Me
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum!
        </p>
      </section>
    </main>
  );
}

export default DialogPage;
