import CommentContainer from "../../components/Comment/CommentContainer"
import GoBack from "../../features/Utils/GoBack"

function NestedComment() {


  return (
    <div>
       <div className="bg-black">
       <GoBack/>
       </div>
      <CommentContainer/>  
    </div>
  )
}

export default NestedComment