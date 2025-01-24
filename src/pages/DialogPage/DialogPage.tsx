import { useState } from "react";
import ShowModel from "../../components/ModelSheet/ShowModel";
import CountDown from "../../components/CountDown/CountDown";
import GoBack from "../../features/Utils/GoBack";
import { HeroModel } from "./SignupModelUtils";

function DialogPage() {
  const [normalMode, setNormalMode] = useState<boolean>(false);
  const [signupMode, setSignupMode] = useState<boolean>(false);

  const handleModel = (num: number) => {
    if (num === 1) return setNormalMode((prev) => !prev);
    if (num === 2) return setSignupMode((prev) => !prev);
  };

  const NormalModel = (
    <ShowModel bg="rgba(0,0,0,0.5)" alignItems="center" blur="20px">
      <div className="bg-slate-950 max-w-[300px] text-white px-4 py-2 rounded-md">
        <h2 className="text-lg font-medium">Lorem</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          perferendis placeat quas nesciunt beatae rerum error nulla quod
          dolorum magnam reiciendis sapiente ratione voluptas hic, esse corporis
          ea possimus, eligendi atque, debitis quasi.
        </p>
        <div className="flex justify-between items-center my-2">
          <button className="px-4 py-2 border ">Thank You</button>
          <button
            className="px-4 py-2 bg-black border"
            onClick={() => handleModel(1)}
          >
            Close
          </button>
        </div>
      </div>
    </ShowModel>
  );

  const SignUpModel = (
    <ShowModel bg="rgba(0,0,0,0.5)" alignItems="end" blur="20px">
      <div onClick={() => handleModel(2)} className="w-[1000px]">
        <HeroModel />
      </div>
    </ShowModel>
  );

  return (
    <main className="max-w-4xl p-4 mx-auto">
      <GoBack />
      <CountDown />
      {normalMode && NormalModel}
      {signupMode && SignUpModel}
      <section className="flex flex-col gap-2 my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          pariatur, nulla dolorum iste facere, voluptate odio ipsa illum quaerat
          laborum provident repellat ducimus tenetur debitis aliquam, magnam
          totam ut doloribus quia consequuntur voluptatum! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quibusdam pariatur, nulla dolorum
          iste facere, voluptate odio ipsa illum quaerat laborum provident
          repellat ducimus tenetur debitis aliquam, magnam totam ut doloribus
          quia consequuntur voluptatum!
        </p>
        <div className="flex gap-6">
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => handleModel(2)}
          >
            Model
          </button>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => handleModel(1)}
          >
            Show Me
          </button>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={() => handleModel(1)}
          >
            Show Me
          </button>
        </div>
      </section>
    </main>
  );
}

export default DialogPage;
