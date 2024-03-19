import Comment from "../Comment/Comment";
const CommentsUser = () => {[
        {
          "id": 1,
          "author": "Alice",
          "content": "This is my first post. What do you think?",
          "comments": "I have some suggestions for improvement."
        },
        {
          "id": 2,
          "author": "Bob",
          "content": "Just finished reading a fascinating book. Highly recommend it!",
          "comments": "I'm looking for a good book to read. What's the title?"
        },
        {
          "id": 3,
          "author": "Charlie",
          "content": "Sharing my thoughts on the latest tech trends.",
          "comments": "I have a question about one of the trends you mentioned."
        },
        {
            "id": 4,
            "author": "Alice",
            "content": "This is my first post. What do you think?",
            "comments": "I have some suggestions for improvement."
          },
          {
            "id": 5,
            "author": "Bob",
            "content": "Just finished reading a fascinating book. Highly recommend it!",
            "comments": "I'm looking for a good book to read. What's the title?"
          },
          {
            "id": 6,
            "author": "Charlie",
            "content": "Sharing my thoughts on the latest tech trends.",
            "comments": "I have a question about one of the trends you mentioned."
          }
      ]
      
    return (
        <div className="d-flex">
            {
                CommentsUser.map
                // Comments.map(((Comment=> (<Comment key={Comment.id} comment={Comment}/>))))
            }
        </div>
    );
};

export default Comments;