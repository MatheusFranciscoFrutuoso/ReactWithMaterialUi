import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';



const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Product name',
    width: 150,
    editable: true,
  },
  {
    field: 'productCategory',
    headerName: 'Product category',
    width: 150,
    editable: true,
  }
];

const rows = [
  { id: 1, name: 'Snow', productCategory: 'Jon'},
  { id: 2, name: 'Lannister', productCategory: 'Cersei'},
  { id: 3, name: 'Lannister', productCategory: 'Jaime'},
  { id: 4, name: 'Stark', productCategory: 'Arya'},
  { id: 5, name: 'Targaryen', productCategory: 'Daenerys'},
  { id: 6, name: 'Melisandre', productCategory: null},
  { id: 7, name: 'Clifford', productCategory: 'Ferrara'},
  { id: 8, name: 'Frances', productCategory: 'Rossini'},
  { id: 9, name: 'Roxie', productCategory: 'Harvey'},
];

class ProductList extends Component {

  render() {
    return (
      <div style={{ height: 400}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
}

export default ProductList;