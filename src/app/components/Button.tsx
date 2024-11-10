
import "../style/Buton.css";

interface p  {
  text:string;
  className?:string;
}

function Button(props:p) {


  return (
    <section>

      <button className="button-p">{props.text}</button>
      
    </section>
  )
}

export default Button