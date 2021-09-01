import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Product name',
    width: 200,
    editable: true,
  },
  {
    field: 'productValue',
    headerName: 'Product value',
    width: 200,
    editable: true,
  },  {
    field: 'productCategory',
    headerName: 'Product category',
    width: 200,
    editable: true,
  }
];

class ProductList extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: []
    }   
  }

  componentDidMount(){
    this.repo = this.props.listP;
    this.setState({
      list : this.repo.list()
    })
    this.repo.enroleds(this.attList.bind(this))
  }

  componentWillUnmount(){
    this.repo.removeEnroled(this.attList.bind(this))
  }

  attList(list){ 
    this.setState({
      list : list
    })
  }

  render() {
    return (
      <div style={{ height: 400}}>
        <DataGrid
          rows={this.state.list}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
}

export default ProductList;