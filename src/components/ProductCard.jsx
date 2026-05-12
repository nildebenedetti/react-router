function ProductCard({
    productImg = "url",
    productName = "Product Name",
    productPrice = "19.99",
    productCategory = "",
    productDescription = "A beautiful product you definitely need. Handmade by fairies."
}) {
    return <div className="card col-12 col-md-6 col-lg-4 p-3 m-3 d-flex flex-column align-items-center justify-content-center">
        <div><h5 className="card-title productName py-3">{productName}</h5></div>
        <img src={productImg} className="card-img-top" alt={productName}></img>
        <div className="card-body">
            <p className="card-text productDescription">{productDescription}</p>
            <p className="card-text productPrice">
                <span>&euro; </span>{productPrice}
            </p>
            <p className="card-text productCategory">{productCategory}</p>
            <a href="#" className="btn btn-dark">Add to cart</a>
        </div>
    </div>
}
export default ProductCard;