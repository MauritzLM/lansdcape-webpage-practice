// create a section for each type of service
// and a product card for each product

function Products({ service, products }) {
    return (
        <>

            <h2>{service}</h2>
            <div className="products-container">
                {products?.map((item) => {
                    return <div className="product-card" key={item.id}>
                        <h3>{item.name}</h3>
                        <ul>
                            {item.features?.map(
                                (feature, index) => {
                                    return <li key={`${item.id}-${index}`}>{feature}</li>
                                })}

                        </ul>

                        <p>starting at</p>
                        <p className="price">{`$ ${item.price}`}</p>

                        <button>Place order</button>
                    </div>
                })}
            </div>

        </>
    )
}

export default Products;