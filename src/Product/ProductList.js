import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductItem from './componenets/ProductItem';


export default function ProductList({products,deleteProduct})
{
    return(
        <div className="row justify-content-center">
            <div className="col col-lg-8 col-sm-12">

                <h1>
                    Product List
                </h1>
                    <NavLink to="/create">
                        <button className="btn btn-success">
                            Add Product
                        </button>
                    </NavLink>
                <table className="table table-bordered table-collapse">
                    <thead>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                Name
                            </td>
                            <td>
                                Description
                            </td>
                            <td>
                                Price
                            </td>
                            <td>
                                Created At
                            </td>
                        </tr> 
                    </thead>
                    <tbody>
                    {
                        products.map(element => {
                          return <ProductItem product={element} removeProduct={deleteProduct} key={element.id}/>  
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
