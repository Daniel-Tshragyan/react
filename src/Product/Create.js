import React, {useState, useEffect} from 'react'

export default function Create({createProduct}){

    let [obj,setObj] = useState({})

    function changeObj(e){
        setObj({...obj,[e.target.name]:e.target.value})
    }

    return(
        <div>
            <h1>Create</h1>

            <input type="text" placeholder="Name" name="name" className="form-control" onChange={(e) => changeObj(e)}/>
            <input type="text" placeholder="Description" name="description" className="form-control" onChange={(e) => changeObj(e)}/>
            <input type="number" placeholder="Price" name="price" className="form-control" onChange={(e) => changeObj(e)}/>
            <input type="date" placeholder="Created At" name="createdAt" className="form-control" onChange={(e) => changeObj(e)}/>

            <button onClick={()=> createProduct(obj)}>Create</button>
        </div>
        
    )
} 