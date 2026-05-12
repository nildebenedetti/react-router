import { Link, NavLink } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";


function Prodotti() {
    {/** mi setto una variabile di stato per la lista di prodotti 
    di modo che sia dinamica e aggiornata quando navigo questa pagina
    e gestire eventuali trigger che verranno aggiunti in futuro*/}

    const { productList, setProductList } = useState([]);
    {/* adesso devo scrivermi la fetch dei prodotti */ }
    useEffect (() => {


    }, []);

}

return <div>
    <Navbar />
    <header className="header d-flex justify-content-center py-3 flex-column">
        <div className="px-3">
            <h3> Prodotti</h3>
        </div>
        <div className="px-3">
            <p>Trova l'articolo perfetto per te!</p>
        </div>
    </header>
    <div className="container d-flex justify-content-center mx-3">
        <div className="row d-flex justify-content-center align-items-center">

        </div>
    </div>

</div>
}
export default Prodotti