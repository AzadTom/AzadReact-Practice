import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import  { TComment,commentsData } from "../../constants/constant";
import FlatList from "../../Hoc/FlatList";
import CommenItem from "./CommenItem";

const CommentContainer = () => {
  const [commentList, setCommentList] = useState<TComment[]>(commentsData);
  const commentRef = useRef<HTMLInputElement>(null);

  const handleComment = () => {
    const commentPayload: TComment = {
      author: "M",
      content: commentRef.current?.value || "",
      id: uuid(),
      replies: [],
      timestamp: "2024-11-10T09:00:00",
    };
    setCommentList((prev: TComment[]) => [commentPayload, ...prev]);
    if (commentRef.current) {
      commentRef.current.value = "";
    }
  };

  const handleReply = (id: string, reply: string) => {
    const replyPayload: TComment = {
      author: "R",
      content: reply,
      id: uuid(),
      replies: [],
      timestamp: "2024-11-10T09:00:00",
    };

    setCommentList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, replies: [replyPayload,...item.replies] };
        }

        const updatedReplies = item.replies.map((reply) => {
          if (reply.id === id) {
            return { ...reply, replies: [replyPayload,...reply.replies] };
          }
          return reply;
        });

        return { ...item, replies: updatedReplies };
      })
    );

    console.log(commentList);

  };

  return (
    <section className="max-w-[1000px] mx-auto p-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          <input
            ref={commentRef}
            type="text"
            className="w-full h-[52px] px-4 py-2 text-black rounded"
            placeholder="Comment..."
          />
          <button
            className="px-4 py-2 text-white bg-teal-400 h-[52px] rounded hover:bg-teal-600"
            onClick={handleComment}
          >
            comment
          </button>
        </div>
        <FlatList
          key="comment-listing"
          data={commentList}
          renderItem={(item: TComment) => (
            <CommenItem {...item} handleReply={handleReply} />
          )}
        />
      </div>
    </section>
  );
};

export default CommentContainer;
