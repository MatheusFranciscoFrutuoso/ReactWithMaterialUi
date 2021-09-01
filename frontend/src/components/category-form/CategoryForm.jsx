import React from 'react';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
class ProductForm extends Component {
    state = {}
    render() {
        return (
            <form>
                <TextField id="id" label="id" fullWidth margin="dense" />
                <TextField id="category-name" label="Category name" fullWidth margin="dense" />
                <Button variant="outlined" color="secondary" fullWidth>Save</Button>
            </form>
        );
    }
}

export default ProductForm;