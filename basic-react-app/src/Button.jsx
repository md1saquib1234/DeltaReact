function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}

function handleMouseOver() {
  console.log("bye!");
}

function handleDbClick() {
  console.log("You double clicked");
}

export default function Button() {
  return (
  <div>
    <button onClick={handleClick}>Click me!</button>
    <p onMouseOver={handleMouseOver}>this parah is for event demo</p>
    <button onDoubleClick={handleDbClick}>double click me</button>
    </div>
    );
}