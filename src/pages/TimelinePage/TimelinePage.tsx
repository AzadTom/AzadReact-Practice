import FlatList from "../../Hoc/FlatList";
import useClassNames from "../../hooks/useClassNames";

const list = [
  {
    date: "23-04-2025",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,repellat a, vero, iure saepe minus dolorum quod sunt quasi maxime dicta suscipit est! Consequatur eligendi impedit in.Eveniet, aspernatur error!",
  },
  {
    date: "23-04-2025",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,repellat a, vero, iure saepe minus dolorum quod sunt quasi maxime dicta suscipit est! Consequatur eligendi impedit in.Eveniet, aspernatur error!",
  },
  {
    date: "23-04-2025",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,repellat a, vero, iure saepe minus dolorum quod sunt quasi maxime dicta suscipit est! Consequatur eligendi impedit in.Eveniet, aspernatur error!",
  },
  {
    date: "23-04-2025",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,repellat a, vero, iure saepe minus dolorum quod sunt quasi maxime dicta suscipit est! Consequatur eligendi impedit in.Eveniet, aspernatur error!",
  },
];

const TimelinePage = () => {
  return (
    <div>
      <div className="m-4">
        <h2 className="my-4 font-bold text-[21px]">Recent update</h2>
        <ul className="flex flex-col sm:flex-row gap-4">
          <li className="max-w-[360px]">
            <FlatList
              data={list}
              key="timeline"
              renderItem={(item, index: number, list) => (
                <TimeLineItem
                  key={index}
                  {...item}
                  lastIndex={index + 1 === list.length}
                />
              )}
            />
          </li>
          <li className="max-w-[360px]">
            <TimeLineLevel1 />
          </li>
        </ul>
        <TimeLineLevel2 />
      </div>
    </div>
  );
};

export default TimelinePage;

interface TimeLineItemProps {
  date: string;
  message: string;
  lastIndex: boolean;
}

const TimeLineItem = (props: TimeLineItemProps) => {

  
  const parentStyle = useClassNames("relative flex gap-6 pb-4 ");
  const lineWithCircleStyle = useClassNames(
    "before:absolute before:left-[10px] before:h-full before:w-[1px] before:bg-[#787878]"
  );
  const withCircleStyle = useClassNames("");
  const { date, message, lastIndex } = props;

  return (
    <li className={parentStyle}>
      <div className={!lastIndex ? lineWithCircleStyle : withCircleStyle}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#787878" />
        </svg>
      </div>
      <div>
        <p>{date}</p>
        <p className="mt-2">{message}</p>
      </div>
    </li>
  );
};

const TimeLineLevel1 = () => {
  return (
    <div className="relative pt-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 left-10 w-4 h-4 transform rotate-45 bg-white"
      ></div>
      <div className="bg-white  p-6 shadow-md rounded-md text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
        voluptatum, cupiditate maxime incidunt reiciendis repudiandae sunt
        commodi explicabo blanditiis molestias ad eligendi fugiat esse vitae
        perferendis dolorem obcaecati consectetur deleniti!
      </div>
      <div
        aria-hidden="true"
        className="w-4 h-4 transform rotate-45 bg-white float-right mt-[-10px] mr-[100px]"
      ></div>
    </div>
  );
};

const TimeLineLevel2 = () => {
  return (
    <div className="relative z-0">
      <div className="absolute inset-0 left-[42px] w-2 h-full bg-white shadow-md"></div>
        <div className="relative z-10">
        <img
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="image"
        className="size-24 object-cover rounded-full shadow-md border-4 border-white"
      />
      <div className="relative pt-2">
        <div
          aria-hidden="true"
          className="absolute inset-0 left-10 w-4 h-4 transform rotate-45 bg-white"
        ></div>
        <div className="bg-white  p-6 shadow-md rounded-md text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
          voluptatum, cupiditate maxime incidunt reiciendis repudiandae sunt
          commodi explicabo blanditiis molestias ad eligendi fugiat esse vitae
          perferendis dolorem obcaecati consectetur deleniti!
        </div>
      </div>
        </div>
    </div>
  );
};
