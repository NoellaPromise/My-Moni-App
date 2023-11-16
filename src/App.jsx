import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCar from "./pages/BookCar";
import HomePage from "./pages/HomePage";
import MycarsPage from "./pages/MycarsPage";
import MyBookings from "./pages/MyBookings";
import AddCar from "./pages/AddCar";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookcar" element={<BookCar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/mycar" element={<MycarsPage />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/addcar" element={<AddCar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
