import {
    Link,
    Navigate,
    UNSAFE_FetchersContext,
    useNavigate,
    useParams
} from "react-router";

import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Product() {
    const { id } = useParams() /* come se gli stessimo segnalando
        che per il componente products deve recuperare dalla route il parametro dinamico */
    const [ product, setProduct ] = useState({});
    const API_URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(result => {
                return result.json();
            })
            .then(data => {
                setProduct(data);
                console.log(product);

            })
            .catch( error => {
                console.error('errore nel caricamento dei dati',error);
                
            })
    }, [id]);

    return <>
        <div className="container">
        <p>{JSON.stringify(product)}</p>
        </div>

    </>
}
export default Product