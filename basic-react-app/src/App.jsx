import "./App.css";
//import
import {Title} from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";




function App() {
  
  return (
    <>
    <MsgBox userName="Saquib" textColor="lightgreen"/>
    <ProductTab />
    </>
  
  );
}

export default App;
