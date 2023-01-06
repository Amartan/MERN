const date = new Date();
const dat = date.getFullYear();
const articleImg2 = "require('../pic/Article2.png')";
const articleTitle = "This way is wrong about UI Design";
const articleText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam, neque vero ea accusantium vel adipisci, rerum modi suscipit veritatis illo nesciunt doloribus commodi dolore, ipsum cumque labore ex. Cupiditate.";

export default function Article() {
  // console.log(dat);
  return (
    <div className="articleContainer">
      <div className="article">
        <img src={require("../pic/Article1.png")} alt="img" />
        <p>{dat}</p>
        <h2>{articleTitle}</h2>
        <p>{articleText}</p>
        <a
          className="articleLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          READ MORE
        </a>
      </div>
      <div className="article">
        <img src={require("../pic/Article2.png")} alt="img" />
        <p>{dat}</p>
        <h2>{articleTitle}</h2>
        <p>{articleText}</p>
        <a
          className="articleLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}
