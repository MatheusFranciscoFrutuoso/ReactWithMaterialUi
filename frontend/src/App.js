import './assets/css/App.css';
import { Fragment, Component} from 'react';
import ProductForm from './components/product-form';
import CategoryForm from './components/category-form';
import ProductList from './components/product-list';
import CategoryRepository from './Repository/CategoryRepository';
import ProductRepository from './Repository/ProductRepository';
import { Container, Grid } from '@material-ui/core';

class App extends Component {
  #repoC;
  #repoP;
  constructor(){
    super();
    this.#repoC = new CategoryRepository();
    this.#repoP = new ProductRepository();
  }
  render(){
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
          <CategoryForm create ={this.#repoC.create.bind(this.#repoC)}/>
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
          <ProductForm create ={this.#repoP.create.bind(this.#repoP)} repo={this.#repoC}/>
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
          <ProductList listP={this.#repoP}/>
        </Container>
  
      </Fragment>
    );
  } 
}

export default App;
