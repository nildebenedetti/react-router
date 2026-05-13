{/* import con repicking  per elementi libreria */ }
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route Component={MainLayout}>
          <Route path="" Component={Home} />

          <Route path="/chi-siamo" Component={ChiSiamo} />

          <Route path="/prodotti" Component={Prodotti} />
          {/** inserisco path parametrico per  il componente product*/}
          <Route path="products/:product.id" Component={Product} />
           {/*Inserisco la route per la pgina errore 
      di modo che se fallisce la ricerca a cascata 
      mostri la pag di errore 404 */}
          <Route path="*" Component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
