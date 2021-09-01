import './assets/css/App.css';
import { Fragment } from 'react';
import ProductForm from './components/product-form';
import CategoryForm from './components/category-form';
import ProductList from './components/product-list';
import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
          <h1>Category registration</h1>
        </Grid>
        <CategoryForm />
      </Container>

      <Container maxWidth="sm">
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
          <h1>Product registration</h1>
        </Grid>
        <ProductForm />
      </Container>

      <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        <h1>Product listing</h1>
      </Grid>
        <ProductList />
      </Container>

    </Fragment>
  );
}

export default App;
