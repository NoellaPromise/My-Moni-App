import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-red-300 font-lora">Hello world , how are you doing</h1>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </>
  );
}

export default App;
