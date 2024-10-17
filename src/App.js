import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Page_home';
import FicheLogement from './pages/Page_logement';
import APropos from './pages/Page_a_propos';
import NotFound from './pages/Page_not_found'; 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche_logement" element={<FicheLogement />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
