export default function Submenu({ submenu }) {
  console.log(submenu);
  return (
    <div class="submenu">
      <ul>
        {submenu.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
