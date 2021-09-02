import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';


function ProductList({listP}) {
  
  let [list, setList] = useState([]);
  listP.enroleds(setList);

  let columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Product name',
      width: 200,
      editable: true,
    },
    {
      field: 'value',
      headerName: 'Product value',
      width: 200,
      editable: true,
    },  {
      field: 'category',
      headerName: 'Product category',
      width: 200,
      editable: true,
    }
  ];

  return (
    <div style={{ height: 400}}>
      <DataGrid
        rows={list}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default ProductList;