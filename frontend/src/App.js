import './assets/css/App.css';
import { Fragment } from 'react';
import ProductForm from './components/product-form';
import ProductList from './components/product-list';
import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Product registration</h1>
        <ProductForm />
      </Grid>

      <Container maxWidth="sm">
        <h1>Product listing</h1>
        <ProductList />
      </Container>

    </Fragment>
  );
}

export default App;
