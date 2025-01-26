// Define types for comments and nested replies
export type TComment = {
    id: string;
    author: string;
    content: string;
    timestamp: string;
    replies: TComment[]; // Nested replies are of type Comment, allowing for recursive nesting
  };
  
  export const commentsData1:TComment[] = [];
  export const commentsData: TComment[] = [
    {
      id: "1",
      author: "Alice",
      content: "This is the first comment!",
      timestamp: "2024-11-10T08:45:00",
      replies: [
        {
          id: "2",
          author: "Bob",
          content: "I agree with this!",
          timestamp: "2024-11-10T09:00:00",
          replies: [
            {
              id: "3",
              author: "Charlie",
              content: "Same here! Great points raised.",
              timestamp: "2024-11-10T09:10:00",
              replies: []
            },
            {
              id: "4",
              author: "Dave",
              content: "Interesting perspective, Alice. Let's discuss!",
              timestamp: "2024-11-10T09:15:00",
              replies: [
                {
                  id: "5",
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
      id: "6",
      author: "Frank",
      content: "Here's another top-level comment.",
      timestamp: "2024-11-10T10:00:00",
      replies: [
        {
          id: "7",
          author: "Grace",
          content: "Thanks for sharing, Frank!",
          timestamp: "2024-11-10T10:05:00",
          replies: [
            {
              id: "8",
              author: "Hank",
              content: "I agree with Grace, this is insightful.",
              timestamp: "2024-11-10T10:15:00",
              replies: []
            }
          ]
        },
        {
          id: "9",
          author: "Ivy",
          content: "I have a question about this comment.",
          timestamp: "2024-11-10T10:20:00",
          replies: []
        }
      ]
    }
  ];


  export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
  
    // Options for a human-readable date format
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  
    // Format the date to a readable format, e.g., "November 10, 2024, 10:00 AM"
    return date.toLocaleDateString("en-US", options);
  }
  