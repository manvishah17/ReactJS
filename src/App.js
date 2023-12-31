import Homepage from "./Homepage";
import Moviedetails from "./components/Moviedetails";
// import Search from "./search";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function HomePageComponent() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/moviedetails/:imdbID" element={<Moviedetails />} />
          {/* <Route path="/search/:searchtext" element={<Moviedetails />} /> */}

          <Route path="/*" element={<h1>error</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default HomePageComponent;
