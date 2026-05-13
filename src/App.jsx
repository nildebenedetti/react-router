{/* import con repicking  per elementi libreria */ }
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route Component={MainLayout}>
          <Route path="" Component={Home} />

          <Route path="/chi-siamo" Component={ChiSiamo} />

          <Route path="/prodotti" Component={Prodotti} />
          {/** METTIAMO UN PATH PARMETRICO CREEANDO 
           * UNA NEW PGE PRODUCT E colleghiamo con
           * <Route path="products/:productId"Component={Product}>*/}
          {/* Inserisco la route per la pgina errore 
      di modo che se fallisce la ricerca a cascata 
      mostri la pag di errore 404 */}
          <Route path="*" Component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
