const Article = ({article}) => {
const{id, title, author, publicationDate, content} = article
    
    return (
        <div className="newsInfo">
           <h3>Id: {id}</h3>
             <h2>Title: {title}</h2>
            <h3>Author: {author}</h3>
            <p>PublicationDate: {publicationDate}</p>
            <p>Content: {content}</p> 
        </div>
    );
};

export default Article;