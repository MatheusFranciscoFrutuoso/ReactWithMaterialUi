import React from 'react';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import Category from '../../Models/Category'
class ProductForm extends Component {
    id;
    name;

    handlerId(event){
       this.id = event.target.value;

    }
    handlerName(event){
        this.name = event.target.value;
    }
    handlerSubmit(event){
        event.stopPropagation();
        event.preventDefault();

        let category = new Category();
        category.id = this.id;
        category.name = this.name;
        this.props.create(category);
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit.bind(this)}>
                <TextField id="idC" label="id" fullWidth margin="dense" onChange={this.handlerId.bind(this)}/>
                <TextField id="category-name" label="Category name" fullWidth margin="dense"onChange={this.handlerName.bind(this)}/>
                <Button variant="outlined" color="secondary" fullWidth type="submit" >Save</Button>
            </form>
        );
    }
}

export default ProductForm;