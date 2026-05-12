{/* import con repicking  per elementi libreria */}
import { BrowserRouter, Routes, Route } from "react-router"; 
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" Component={Home} />

      <Route path="/chi-siamo" Component={ChiSiamo} />

      <Route path="/prodotti" Component={Prodotti} />

      {/* Inserisco la route per la pgina errore 
      di modo che se fallisce la ricerca a cascata 
      mostri la pag di errore 404 */}
      <Route path="*" Component={NotFound} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
