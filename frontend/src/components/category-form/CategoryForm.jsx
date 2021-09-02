import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Category from '../../Models/Category'
function CategoryForm ({create}) {
    let id;
    let name;
    
    return (
        <form onSubmit={(e) => {
            e.stopPropagation();
            e.preventDefault();

            
                console.log(new Category(id, name))
            create(new Category(id, name));
        }}>
            <TextField id="idC" label="id" fullWidth margin="dense" onChange={(e)=>id = e.target.value}/>
            <TextField id="category-name" label="Category name" fullWidth margin="dense" onChange={(e)=>name = e.target.value}/>
            <Button variant="outlined" color="secondary" fullWidth type="submit" >Save</Button>
        </form>
    );
}


export default CategoryForm;