import { Fragment, useState } from "react";
import SignUpModel, { HeroModel } from "./SignUpModel";

function SignUpModelPage() {
  const [state, setState] = useState(false);
  return (
    <main className="mx-auto max-w-[1000px] flex flex-col items-start mt-4 px-4">
       <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => setState(!state)}
        >
          SignUpModel <br /> animatedScrollBar 
        </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum culpa
        quas necessitatibus illum rerum nulla, autem deserunt esse suscipit
        doloribus natus ad nostrum. Ad iusto, asperiores placeat dolorem
        distinctio incidunt ratione sit et?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum culpa
        quas necessitatibus illum rerum nulla, autem deserunt esse suscipit
        doloribus natus ad nostrum. Ad iusto, asperiores placeat dolorem
        distinctio incidunt ratione sit et?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum culpa
        quas necessitatibus illum rerum nulla, autem deserunt esse suscipit
        doloribus natus ad nostrum. Ad iusto, asperiores placeat dolorem
        distinctio incidunt ratione sit et?
      </p>
      <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => setState(!state)}
        >
          SignUpModel <br /> animatedScrollBar 
        </button>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum culpa
        quas necessitatibus illum rerum nulla, autem deserunt esse suscipit
        doloribus natus ad nostrum. Ad iusto, asperiores placeat dolorem
        distinctio incidunt ratione sit et?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum culpa
        quas necessitatibus illum rerum nulla, autem deserunt esse suscipit
        doloribus natus ad nostrum. Ad iusto, asperiores placeat dolorem
        distinctio incidunt ratione sit et?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum culpa
        quas necessitatibus illum rerum nulla, autem deserunt esse suscipit
        doloribus natus ad nostrum. Ad iusto, asperiores placeat dolorem
        distinctio incidunt ratione sit et?
      </p>
      <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => setState(!state)}
        >
          SignUpModel <br /> animatedScrollBar 
        </button>
      {state && (
        <Fragment>
          <SignUpModel bg="rgba(0,0,0,0.5)">
            <HeroModel />
          </SignUpModel>
        </Fragment>
      )}
    </main>
  );
}

export default SignUpModelPage;
