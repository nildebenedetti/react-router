{/* import con repicking  per elementi libreria */}
import { BrowserRouter, Rooutes, Route } from "react-router"; 
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" Component={Home} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
