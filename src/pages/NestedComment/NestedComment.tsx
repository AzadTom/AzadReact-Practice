import CommentContainer from "../../components/Comment/CommentContainer";
import GoBack from "../../components/Utils/GoBack";

function NestedComment() {
  return (
    <div>
      <GoBack />
      <CommentContainer />

      <div className="max-w-[1000px] mx-auto p-4">
        <div className="w-[2px] h-[100px] bg-white"></div>
        <div className="w-[50px] h-[1px] bg-white"></div>
      </div>

      <div className="max-w-[1000px] mx-auto">
        {/* <div
          data-testid="branch-line"
          className={`box-border h-md bg-white  border-0 border-tone-4 border-solid border-b-[1px] cursor-pointer w-[calc(50%+0.5px)] h-[10px]  border-l-[1px] rounded-bl-[12px]`}
        /> */}

         <div className="size-[50px]  m-4 border-b-4 border-l-4  border-white rounded-bl-[50px]">
         </div>
      </div>
    </div>
  );
}

export default NestedComment;
