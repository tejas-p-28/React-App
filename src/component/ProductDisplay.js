import React from 'react';
import './ProductDisplay.css';
const Product = (props) => {
    console.log("IN Products>>>",props)
    const renderProduct = props.prodData.map((data) => {
        return(
            <div className="card" key={data.id}>
                <img src={data.image} alt={data.name}/>
                <hr/>
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                    <p>Rs. {data.cost}</p>
                </div>
            </div>
        )
    })
    return(
        <>
            <div className="main">
                {renderProduct}
            </div>
        </>
    )
}
export default Product