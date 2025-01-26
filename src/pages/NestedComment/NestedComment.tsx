import CommentContainer from "../../components/Comment/CommentContainer";
import GoBack from "../../components/Utils/GoBack";

function NestedComment() {
  return (
    <div>
      <GoBack />
      <CommentContainer/>


      <div className="max-w-[1000px] mx-auto">
         {/* <div className="size-[50px]  m-4 border-b-4 border-l-4  border-white rounded-bl-[50px]">
         </div> */}
      </div>
    </div>
  );
}

export default NestedComment;
