import { Fragment } from "react/jsx-runtime";
import { TComment } from "../../constants/constant";
import { formatTimestamp } from "../../constants/constant";

const CommenItem = (props: TComment) => {
  const { author, content, replies, timestamp } = props;

  return (
    <Fragment>
      <section className="px-4 py-2 rounded-md bg-blue-900 border border-blue-600 w-[max-content]">
        <div className="flex gap-2 items-center">
          <h2 className="px-2.5 py-1 rounded-full bg-white text-blue-600 flex justify-center items-center font-medium">
            {author.charAt(0)}
          </h2>
          <p className="text-xs">{content}</p>
        </div>
        <p className="text-[10px] text-end text-[#EEEEEE]">
          {formatTimestamp(timestamp)}
        </p>
      </section>
      <section className="flex">
        <div className="flex">
          <div className="w-[1px] h-auto bg-white"></div>
          <div className="w-4 h-auto">
             <div className=""></div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          {replies.map((item) => (
            <CommenItem {...item} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default CommenItem;
