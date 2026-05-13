
function ProductCard({
   product
}) {
    return <div className="card col-12 col-md-6 col-lg-4 p-3 m-3 d-flex flex-column align-items-center justify-content-center">
        <div><h5 className="card-title productName py-3">{product.title}</h5></div>
        <img src={product.image} className="card-img-top" alt={product.title}></img>
        <div className="card-body">
            <p className="card-text productDescription">{product.description}</p>
            <p className="card-text productPrice">
                <span>&euro; </span>{product.price}
            </p>
            <p className="card-text productCategory">{product.category}</p>
            {/*<Link to="/" className="btn btn-dark">Scopri</Link> 
             DEVO PASSARE IL LINK AL BOTTONE 
            nella map creiamo anche il link
            <link to={`/products/${product.id}}>
            */}
        </div>
    </div>
}
export default ProductCard;