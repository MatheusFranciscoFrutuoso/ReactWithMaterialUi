import React from 'react';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
class ProductForm extends Component {
    state = {}
    render() {
        return (
            <form>
                <TextField id="id" label="id" fullWidth margin="dense" />
                <TextField id="product-name" label="Product name" fullWidth margin="dense" />
                <TextField id="product-Category" label="Product category" fullWidth margin="dense" />
                <Button variant="outlined" color="secondary">Save</Button>
            </form>
        );
    }
}

export default ProductForm;