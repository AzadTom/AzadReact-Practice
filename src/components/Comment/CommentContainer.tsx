import commentsData, { TComment } from "../../constants/constant"
import FlatList from "../../Hoc/FlatList"
import CommenItem from "./CommenItem"

const CommentContainer = () => {

  return (
    <section className="max-w-[1000px] mx-auto p-4">
      <div className="flex flex-col">
      <FlatList
      key="comment-listing"
       data={commentsData}
       renderItem={(item:TComment)=>(<CommenItem {...item}/>)}
      /> 
      </div> 
    </section>
  )
}

export default CommentContainer