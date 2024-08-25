import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasePages } from "./Pages/BasePages";
import { Home } from "./Pages/Home";
import { Agents } from "./Pages/Agents";
import { Bundles } from "./Pages/Bundles";
import { Maps } from "./Pages/Maps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePages />}>
            <Route path="/" element={<Home />} />
            <Route path="/agentes" element={<Agents />} />
            <Route path="/pacotes" element={<Bundles />} />
            <Route path="/mapas" element={<Maps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
