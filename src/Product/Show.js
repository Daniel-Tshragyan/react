import React from 'react';

export default function Show({getProduct}){
    let href = new URL(window.location.href).pathname
    let id = href.split('/')[href.split('/').length - 1]
    var product = getProduct(id)
    if (!product)
        window.location.href = "/"

    return(
        <div>
            <h1>id: {product.id}</h1>
            <h1>name: {product.name}</h1>
            <h1>price: {product.price}</h1>
            <h1>description: {product.description}</h1>
            <h1>createdAt: {product.createdAt}</h1>
        </div>
    )
}