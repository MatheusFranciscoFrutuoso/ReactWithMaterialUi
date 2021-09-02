import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Product from '../../Models/Product';

function ProductForm ({create, repo}) {
    
    let [list, setListC] = useState(repo.list());
    repo.enroleds(setListC);

    let id;
    let name;
    let value;
    let category;    

    return (
        <form onSubmit={(event) =>{
            event.stopPropagation();
            event.preventDefault();

            let product = new Product(
                id,
                name,
                value,
                category
            );
            create(product);
        }}>
        <TextField id="idP" label="id" fullWidth margin="dense" onChange={(e)=>id = e.target.value}/>
        <TextField
            id="product-name"
            label="Product name"
            fullWidth
            margin="dense"
            onChange={(e)=>name = e.target.value}
        />
        <TextField
            id="product-value"
            label="Product Value"
            fullWidth
            margin="dense"
            onChange={(e)=>value = e.target.value}
        />
        <label >Product category</label>
        <select onChange={(e)=>category = e.target.value}>
            {
                list.map((c, i) => {
                    return(
                        <option key={i} value={c.id}>{c.name}</option>
                    )
                })
            }
        </select>
        <Button variant="outlined" color="secondary" fullWidth type="submit">
            Save
        </Button>
        </form>
    );
}

export default ProductForm;