{/* import con repicking  per elementi libreria */}
import { BrowserRouter, Routes, Route } from "react-router"; 
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" Component={Home} />

      <Route path="/chi-siamo" Component={ChiSiamo} />

      <Route path="/Prodotti" Component={Prodotti} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
