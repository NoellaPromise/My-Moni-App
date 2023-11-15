import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="bg-gray-800 text-white flex justify-around p-4">
        <p>Menu</p>
        <FontAwesomeIcon icon={faCar}/>
        <FontAwesomeIcon  icon ={faUser}/>
      </div>
    </>
  );
}

export default Navbar;
