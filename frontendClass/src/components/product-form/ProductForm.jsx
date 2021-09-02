import React from 'react';
import { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import Product from '../../Models/Product';

class ProductForm extends Component {
    state = {listP:[]}

    id;
    name;
    value;
    category;

    componentDidMount(){
        this.props.repo.enroleds(this.attList.bind(this))
    }

    attList(list){
        this.setState({
            listP: list
        })
    }

    handlerId(event){
       this.id = event.target.value;
    }
    handlerName(event){
        this.name = event.target.value;
    }
    handlerValue(event){
       this.value = event.target.value;
    }
    handlerCategory(event){
       this.category = event.target.value;
    }
    handlerSubmit(event){
        event.stopPropagation();
        event.preventDefault();

        let product = new Product();
        product.id = this.id;
        product.name = this.name;
        product.value = this.value;
        product.category = this.category;
        this.props.create(product);
    }
    render() {
        return (
          <form onSubmit={this.handlerSubmit.bind(this)}>
            <TextField id="idP" label="id" fullWidth margin="dense" onChange={this.handlerId.bind(this)}/>
            <TextField
              id="product-name"
              label="Product name"
              fullWidth
              margin="dense"
              onChange={this.handlerName.bind(this)}
            />
            <TextField
              id="product-value"
              label="Product Value"
              fullWidth
              margin="dense"
              onChange={this.handlerValue.bind(this)}
            />
            <label >Product category</label>
            <select onChange={this.handlerCategory.bind(this)}>
                {
                    this.state.listP.map((c, i) => {
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
}

export default ProductForm;