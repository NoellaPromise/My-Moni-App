import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCar from "./pages/BookCar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookcar" element={<BookCar />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
