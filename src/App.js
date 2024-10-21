import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Locations';
import About from './pages/About';
import NotFound from './pages/404'; 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
