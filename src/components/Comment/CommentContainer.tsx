import commentsData, { TComment } from "../../constants/constant"
import List from "../../features/List/List"
import CommenItem from "./CommenItem"

const CommentContainer = () => {

  return (
    <section className="max-w-[1000px] mx-auto p-4">
      <div className="flex flex-col">
      <List
       data={commentsData}
       renderItem={(item:TComment)=>(<CommenItem {...item}/>)}
       keyExtractor={(item:TComment)=>(item.author+item.id)}
      /> 
      </div> 
    </section>
  )
}

export default CommentContainer