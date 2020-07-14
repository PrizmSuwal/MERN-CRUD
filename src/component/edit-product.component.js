import React, { Component} from 'react';
import axios from 'axios';

const initialState = {
  productName: '',
  productPrice: '',
  productDescription: '',
  productNameErr: '',
  productPriceErr: '',
  productDescriptionErr: ''
}

export default class EditProduct extends Component {
   constructor(props) {
     super(props);

     this.state = initialState;
   }

   componentDidMount() {
     axios.get('http://localhost:3000/product/' + this.props.match.params.id)
     .then(response =>{
       this.setState({
         productName: response.data.productName,
         productPrice: response.data.productPrice,
         productDescription: response.data.productDescription,  
       })
     })
     .catch(function (error){
       console.log(error);
     })
   }

   handleProductNameChange = (event) => {
     this.setState({
       productName: event.target.value
     });
   }

   handleProductPriceChange = (event) => {
    this.setState({
      productPrice: event.target.value
    });
  }

    handleProductDescriptionChange = (event) => {
      this.setState({
        productDescription: event.target.value
      });
    }

    validate = () => {
      let productNameErr = "";
      let productPriceErr= "";
      let productDescriptionErr= "";

      if(!this.state.productName){
        productNameErr = 'Product name cannot be empty!!';
      }

      if(!this.state.productPrice){
        productPriceErr = 'Price cannot be empty!!';
      }

      if(!this.state.productDescription){
        productDescriptionErr = 'Description cannot be empty!!';
      }

      if (productNameErr || productPriceErr || productDescriptionErr){
        this.setState ({ productNameErr,productPriceErr,productDescriptionErr });
        return false;
      }
      return true;
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const productDetail = {
        productName: this.state.productName,
        productPrice: this.state.productPrice,
        productDescription: this.state.productDescription
       }

      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        this.setState(initialState);
        alert('Product edited successfully')
        window.location.assign("/");
      }


    console.log(productDetail);

    axios.post('http://localhost:3000/product/update/' + this.props.match.params.id, productDetail)
    .then(res => console.log(res.data));
  }


  render(){
    return (
      <div className="container">
        <h4 className="text-info">Edit product</h4>
        <form onSubmit= {this.handleSubmit}>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Name : </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.productName}  placeholder="Product name" onChange={this.handleProductNameChange} />
              <div className="text-warning" >{this.state.productNameErr}</div>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Price : </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.productPrice} placeholder="Product price" onChange={this.handleProductPriceChange} />
              <div className="text-warning" >{this.state.productPriceErr}</div>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Description: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.productDescription} placeholder="Product description" onChange={this.handleProductDescriptionChange} />
              <div className="text-warning" >{this.state.productDescriptionErr}</div>
            </div>
          </div>

          <div className="form-group row"> 
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Edit</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}