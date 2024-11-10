// Define types for comments and nested replies
export type Comment = {
    id: number;
    author: string;
    content: string;
    timestamp: string;
    replies: Comment[]; // Nested replies are of type Comment, allowing for recursive nesting
  };
  
  const commentsData: Comment[] = [
    {
      id: 1,
      author: "Alice",
      content: "This is the first comment!",
      timestamp: "2024-11-10T08:45:00",
      replies: [
        {
          id: 2,
          author: "Bob",
          content: "I agree with this!",
          timestamp: "2024-11-10T09:00:00",
          replies: [
            {
              id: 3,
              author: "Charlie",
              content: "Same here! Great points raised.",
              timestamp: "2024-11-10T09:10:00",
              replies: []
            },
            {
              id: 4,
              author: "Dave",
              content: "Interesting perspective, Alice. Let's discuss!",
              timestamp: "2024-11-10T09:15:00",
              replies: [
                {
                  id: 5,
                  author: "Eve",
                  content: "Can you elaborate on that, Dave?",
                  timestamp: "2024-11-10T09:20:00",
                  replies: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 6,
      author: "Frank",
      content: "Here's another top-level comment.",
      timestamp: "2024-11-10T10:00:00",
      replies: [
        {
          id: 7,
          author: "Grace",
          content: "Thanks for sharing, Frank!",
          timestamp: "2024-11-10T10:05:00",
          replies: [
            {
              id: 8,
              author: "Hank",
              content: "I agree with Grace, this is insightful.",
              timestamp: "2024-11-10T10:15:00",
              replies: []
            }
          ]
        },
        {
          id: 9,
          author: "Ivy",
          content: "I have a question about this comment.",
          timestamp: "2024-11-10T10:20:00",
          replies: []
        }
      ]
    }
  ];
  
  export default commentsData;
  