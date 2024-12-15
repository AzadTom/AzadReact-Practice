import { Fragment, useState } from "react";

type TShowWithCardProps = {
  text: string;
  index: number;
  img: string;
  onClick: () => void;
};

const ShowWithCard = (props: TShowWithCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer rounded-md bg-[#242424] border border-[#313131] hover:border-[#3c3c3c] overflow-hidden flex flex-col"
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <HoverContent {...props}/> : <Content {...props} />}
    </div>
  );
};

export default ShowWithCard;


const HoverContent = (props:TShowWithCardProps)=>{


  return(
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="bg-black rounded-full px-4 py-2 text-xl font-medium">{props.index}</h2>
      <p className="text-xl font-medium">{props.text}</p>
    </div>
  )

}


const Content = (props: TShowWithCardProps) => {
  const { img, text } = props;
  return (
    <Fragment>
      <div className="w-full h-full">
        <img src={img} alt="saitam-img" loading="lazy" />
      </div>
      <p className="text-white text-sm uppercase px-4 py-2 text-center">
        {text}
      </p>
    </Fragment>
  );
};
