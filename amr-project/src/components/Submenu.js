export default function Submenu (submenu){
  return(
    <div>
      <ul>
        {submenu.map((e)=>(
          <li>{e}</li>
        ))}
      </ul>
    </div>
  )
}