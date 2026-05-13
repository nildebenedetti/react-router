import {
    useParams
} from "react-router";

function Product() {
    const { productId } = useParms() {/* ma come glielo passo sto qua? */}

    

  return <>
<h1> sono un product</h1>
  {/* io devo fare un nuovo fetchone di un singolo prodotto
  nella doc di fakestoreAPI
  function fetchSIngleProductData(ProductId) {
    return fetch(`${API_URL}/${ProductId}`)
  } va messa dentro l use effecte nellárray delle dipendenze ci mettero productId, cosi ogni volta che cambia il singolo prosdotto viene rifatta
  */}
  
  </>
}
export default Product