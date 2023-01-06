export default function Header({ logo, menus }) {
  return (
    <div class="navbar">
      {/* {logo.map((e) => ( */}
      <div>
        <img src={logo.img1} alt="img" />
        <img src={logo.img2} alt="img" />
        {/* ))} */}
      </div>
      <ul>
        {menus.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
