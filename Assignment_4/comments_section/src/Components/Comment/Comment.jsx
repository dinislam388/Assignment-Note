import Comments from "../Comments/Comments";

const Comment = (comment) => {
    console.log(comment);
    const {id, author, content, comments} = comment
    return (
        <div className="commentInfo">
            <h3>Id: {id}</h3>
            <h2>author: {author}</h2>
            <p>Content: {content}</p>
            <p>{Comments}</p>
        </div>
    );
};

export default Comment;