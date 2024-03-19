const Product = ({p}) => {
    const {id, name, price, imgURL} = p

    return (
        <>
        <div className="productInfo">
            <img className="img" src={imgURL} alt="Images" />
            <h3>id: {id}</h3>
            <h2>Product Name: {name}</h2>
            <h3>Price: {price}</h3>
        </div>
        </>
    );
};

export default Product;