export default function Section() {
  return (
    <section class="sect">
      <div>
        <h1>Blog Posts</h1>
        <h2>I think so, this is it.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima
          error consectetur nam aspernatur laboriosam molestias, distinctio,
          voluptatem ex in velit laudantium esse molestiae corporis sint
          doloremque recusandae, ea deserunt suscipit omnis porro labore natus
          repellendus? Ut reiciendis ipsa numquam quasi vel nisi, quibusdam esse
          magnam reprehenderit, ipsum consectetur asperiores et fuga soluta
          neque, accusantium quaerat? Totam ullam dolorum qui!
        </p>
        <div>
          <a
            className="App-link link1"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TWITTER
          </a>
          <a
            className="App-link link2"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="App-link link3"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            MEDIUM
          </a>
        </div>
      </div>
      <div>
        <img src={require("../pic/Saly-17.png")} alt="img" />
      </div>
    </section>
  );
}
