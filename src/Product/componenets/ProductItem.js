import React from 'react'
import { NavLink } from 'react-router-dom'

export default function({product, removeProduct}){
    return (
        <tr>
            <td>
                {product.id}
            </td>
            <td>
                {product.name}
            </td>
            <td>
                {product.description}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                {product.createdAt}
            </td>
            <td>
                <button className="btn btn-danger" onClick={() =>removeProduct(product.id)}>Remove</button>
                <NavLink to={"/show/"+product.id}><button className="btn btn-primary">Show</button></NavLink>
                <NavLink to={"/edit/"+product.id}><button className="btn btn-success">Edit</button></NavLink>
            </td>
            
        </tr>
    )
}