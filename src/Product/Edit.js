import React, { useState, useEffect } from 'react'

export default function Edit({getProduct, changeProduct}){

    let href = new URL(window.location.href).pathname
    let id = href.split('/')[href.split('/').length - 1]
    let product = getProduct(id)
    let [obj, setObj] = useState(product)
    
    function changeObj(e)
    {
        setObj({...obj,[e.target.name]:e.target.value})
    }

    return(
        <div>
            <h1>Edit</h1>

            <input type="text" value={obj.name} placeholder="Name" name="name" className="form-control" onChange={(e) => changeObj(e)}/>
            <input type="text" value={obj.description} placeholder="Description" name="description" className="form-control" onChange={(e) => changeObj(e)}/>
            <input type="number" value={obj.price} placeholder="Price" name="price" className="form-control" onChange={(e) => changeObj(e)}/>
            <input type="date" value={obj.createdAt} placeholder="Created At" name="createdAt" className="form-control" onChange={(e) => changeObj(e)}/>

            <button onClick={()=> changeProduct(obj)}>Change</button>
        </div>

    )
}