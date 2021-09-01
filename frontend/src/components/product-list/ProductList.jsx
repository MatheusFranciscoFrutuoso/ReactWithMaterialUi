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

const rows = [
  { id: 1, name: 'Snow', productValue: '1', productCategory: 'Jon'},
  { id: 2, name: 'Lannister', productValue: '1', productCategory: 'Cersei'},
  { id: 3, name: 'Lannister', productValue: '1', productCategory: 'Jaime'},
  { id: 4, name: 'Stark', productValue: '1', productCategory: 'Arya'},
  { id: 5, name: 'Targaryen', productValue: '1', productCategory: 'Daenerys'},
  { id: 6, name: 'Melisandre', productValue: '1', productCategory: null},
  { id: 7, name: 'Clifford', productValue: '1', productCategory: 'Ferrara'},
  { id: 8, name: 'Frances', productValue: '1', productCategory: 'Rossini'},
  { id: 9, name: 'Roxie', productValue: '1', productCategory: 'Harvey'},
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