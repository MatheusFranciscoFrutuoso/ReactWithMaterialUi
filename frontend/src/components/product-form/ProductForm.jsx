import React from 'react';
import { Component } from 'react';
import { Button, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

class ProductForm extends Component {

    render() {
        return (
          <form>
            <TextField id="id" label="id" fullWidth margin="dense" />
            <TextField
              id="product-name"
              label="Product name"
              fullWidth
              margin="dense"
            />
            <TextField
              id="product-value"
              label="Product Value"
              fullWidth
              margin="dense"
            />
            <InputLabel id="demo-simple-select-label" margin="dense">Product category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=" "
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button variant="outlined" color="secondary" fullWidth>
              Save
            </Button>
          </form>
        );
    }
}

export default ProductForm;