import commentsData from "../../constants/constant"
import CommenItem from "./CommenItem"

const CommentContainer = () => {

  return (
    <section className="m-4">
      {commentsData.map((item)=>(<CommenItem {...item}/>))}  
    </section>
  )
}

export default CommentContainer