
import React, { Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const ProductLists = props => (
  <tr>
    <td>{props.product.productName}</td>
    <td>{props.product.productPrice}</td>
    <td>{props.product.productDescription}</td>
    <td>
      <Link to = {"/edit/" + props.product._id} className="btn btn-info" >edit</Link> |  
      <button type="button" className="btn btn-danger"  onClick = {() => { props.deleteProduct (props.product._id) }}>delete</button>
     </td>
  </tr>
)

export default class Productlist extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = {productDetails: []};
  }
  componentDidMount(){
    Axios.get('http://localhost:3000/product/')
    .then(response => {
      this.setState({
        productDetails: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteProduct(id) {
    Axios.delete('http://localhost:3000/product/' + id)
      .then(res => console.log(res.data));
    this.setState({
      productDetails: this.state.productDetails.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.productDetails.map(currentProduct =>{
      return < ProductLists product={currentProduct} deleteProduct={this.deleteProduct} key={currentProduct._id} />
    })
  }
   
  render(){
    return (
      <div>
         <h3>Product Details</h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Description</th>
              </tr>
            </thead>
            <tbody>
            { this.productList() }
            </tbody>
          </table>

      </div>
    )
  }
}