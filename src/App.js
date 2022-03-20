// import logo from './logo.svg';
import "./App.css";
import { Title } from "./components/Title";
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

function App() {
  return (
    <div className="wrapper">
      <Title />

      <div className="mainParent">
        {/* <!-- display are --> */}
        <Display />

        {/* <!-- button area --> */}
        <Buttons />
      </div>
    </div>
  );
}

export default App;
