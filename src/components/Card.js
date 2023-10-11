import "./css_files/card.css";

function Card(props) {
  const cssClasses = "card " + props.className;
  return <div className={cssClasses}>{props.children}</div>;
}

export default Card;

// Explanantion:
// now with this we basically made a wrapper tag which consist of all the
// basic css that are common on some tags like if you look into the
// card.css file you'll see some common properties (border and shadow)
// now we dont have to define it for every tag in css file we can simply
// wrap that component with our custom made <Card> tag

// props.children : is used to inhert all the values and other tags that are being passed
//in to the card tag

// now as in every there would be some other css classses also
// to get those separately for every plac where we use <card>

// we wrote const cssClasses = "card " + props.className;
//now basically this would make a string named "cssClasses"
//string would be made like (suppose we have other class coming as borderRadius)
// String would be cssClasses="card borderRadius"
