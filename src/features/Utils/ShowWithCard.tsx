type TShowWithCardProps = {
  text: string;
  index:number;
  onClick: () => void;
};

const ShowWithCard = (props: TShowWithCardProps) => {

  const imgURL = 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=600'
  const { text, onClick} = props;
  return (
    <div
      className="cursor-pointer rounded-md bg-[#242424] border border-[#313131] hover:border-[#3c3c3c] overflow-hidden flex flex-col"
      onClick={onClick}
    >
      <div className="w-full h-full">
        <img src={imgURL} alt="saitam-img" loading="lazy" />
      </div>
      <p className="text-white text-sm uppercase px-4 py-2">{text}</p>
    </div>
  );
};

export default ShowWithCard;


