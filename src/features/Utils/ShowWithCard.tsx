type TShowWithCardProps = {
  text: string;
  index:number;
  img:string;
  onClick: () => void;
};

const ShowWithCard = (props: TShowWithCardProps) => {

  const { text, onClick,img,index} = props;
  return (
    <div
      className="cursor-pointer rounded-md bg-[#242424] border border-[#313131] hover:border-[#3c3c3c] overflow-hidden flex flex-col"
      onClick={onClick}
    >
      <div className="w-full h-full">
        <img src={img} alt="saitam-img" loading="lazy" />
      </div>
      <p className="text-white text-sm uppercase px-4 py-2 text-center">{index}-{text}</p>
    </div>
  );
};

export default ShowWithCard;


