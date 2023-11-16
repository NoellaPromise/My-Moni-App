import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCar from "./pages/BookCar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/menu" element={<BookCar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
