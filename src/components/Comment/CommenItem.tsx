import {useState } from "react";
import { TComment } from "../../constants/constant";
import { formatTimestamp } from "../../constants/constant";

type CommenItemProps = TComment & {
  handleReply: (id: string, reply: string) => void;
};

const CommenItem = (props: CommenItemProps) => {
  const { id, author, content, replies, timestamp } = props;

  const [reply,setReply] = useState<string>("");
  // const[show,setShow] = useState(false);
  const handleReply = (replyId:string,message:string) => {
    console.log("message:",message);
    props.handleReply(replyId, message);
    setReply(""); 
  };

  return (
    <section className="w-full flex flex-col">
      <section className="px-4 py-2 rounded-md bg-white text-black">
        <div className="flex gap-2 items-center">
          <h2 className="px-2.5 py-1 rounded-full bg-black text-blue-600 flex justify-center items-center font-medium">
            {author.charAt(0)}
          </h2>
          <p className="text-xs">{content}</p>
        </div>
        <p className="text-[10px] text-end text-slate-400">
          {formatTimestamp(timestamp)}
        </p>
        <div className="flex items-center gap-1 my-2">
          <input
            value={reply}
            onChange={(e)=> setReply(e.target.value)}
            type="text"
            className="w-full h-[42px] px-4 py-2 text-black rounded"
            placeholder="Reply..."
          />
          <button
            className="px-4 py-2 text-white bg-teal-400 h-[42px] rounded hover:bg-teal-600"
            onClick={()=> handleReply(id,reply)}
          >
            Reply
          </button>
        </div>
      </section>

      {/* reply */}
      <section className="flex relative">
        {/* <div className="text-[10px] bg-teal-600 rounded-full absolute top-2 left-0 size-[15px] flex justify-center items-center">+</div> */}
        <div className="w-[1px] h-auto bg-white ml-2"></div>
        <div className="w-full flex flex-col mt-2">
          {replies.map((item) => (
            <div className="flex">
              <div className="size-[24px] border-b-[1px] border-l-[1px]  border-white rounded-bl-[50px]"></div>
              <CommenItem {...item} handleReply={()=> handleReply(item.id,reply)} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CommenItem;
