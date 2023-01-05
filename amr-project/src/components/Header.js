export default function Header({ logo, menus }) {
  return (
    <div>
      {logo.map((e) => (
        <img src="{e}" alt="img" />
      ))}
      <ul>
        {menus.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
