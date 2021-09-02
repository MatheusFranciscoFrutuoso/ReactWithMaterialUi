import './assets/css/App.css';
import { Fragment, useState} from 'react';
import ProductForm from './components/product-form';
import CategoryForm from './components/category-form';
import ProductList from './components/product-list';
import CategoryRepository from './Repository/CategoryRepository';
import ProductRepository from './Repository/ProductRepository';
import { Container, Grid } from '@material-ui/core';

function App () {
  let [repoC] = useState(new CategoryRepository());
  let [repoP] = useState(new ProductRepository());

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
        <CategoryForm create ={repoC.create.bind(repoC)}/>
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
        <ProductForm create ={repoP.create.bind(repoP)} repo={repoC}/>
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
        <ProductList listP={repoP}/>
      </Container>

    </Fragment>
  );
} 

export default App;
