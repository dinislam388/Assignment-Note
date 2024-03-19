import Article from"../Article/Article";

const Articles = () => {
 const newsArticles = [
    {
      id: 1,
      title: 'New Discoveries in Space Exploration',
      author: 'Jane Doe',
      publicationDate: '2023-11-01',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Advancements in Artificial Intelligence',
      author: 'John Smith',
      publicationDate: '2023-10-25',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'Breaking News: Climate Change Agreement Reached',
      author: 'Alice Johnson',
      publicationDate: '2023-10-20',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      title: 'Breaking News: Climate Change Agreement Reached',
      author: 'Alice Johnson',
      publicationDate: '2023-10-20',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      title: 'Tech Giant Launches New Innovation Center',
      author: 'Mark Thompson',
      publicationDate: '2023-10-15',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
      id: 6,
      title: 'Health Tips for a Balanced Lifestyle',
      author: 'Emily Williams',
      publicationDate: '2023-10-10',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];



  return (
    <>
      <div className="d-flex">
        {
          newsArticles.map((article=> (<Article key={Article.id} article={Article}/>)))
        }
      </div>
    </>
  );
};

export default Articles;
