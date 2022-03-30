import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import axios from 'axios';

import tshirt from './Images/tshirt.png';
import backpack from './Images/backpack.png';
import pants from './Images/pants.png';
import trekkingshoes from './Images/trekkingshoes.png';
import giacket from './Images/jacket.png';
import tshirt_ladies from './Images/tshirt_ladies.png';
import Default_image from './Images/Default_image.bmp';

// ActualProductList
const actualProductList = [
  
 
   {
       name: 'T-Shirt',
       price: '599',
       photo: tshirt,
       id: "1"
   },
   {
       name: 'BackPack',
       price: '1500',
       photo: backpack,
       id: "2"
   },
   {
       name: 'Pants',
       price: '1000',
       photo: pants,
       id: '3'
   },
   {
       name: 'Trekking Shoes',
       price: '2000',
       photo: trekkingshoes,
       id: '4'
   },
   {
       name: 'Jacket',
       price: '1500',
       photo: giacket,
       id: '5'
   },
   {
       name:'T-Shirt Ladies',
       price: '650',
       photo: tshirt_ladies,
       id: '6'
   }
]



class ProductControl extends Component {
    constructor(props){
        super(props);
        this.state ={
            productFormVisible: false,
            actualProductList: actualProductList,
            selectedProduct: null
        }
    }
 componentDidMount(){
     axios.get('http://localhost:5000/products')
     then(res =>{
         console.log(res)
         this.setState({
             actualProductList:res.data
         })

     })
    }
   
    handleClick = ()=>{
        this.setState((prevState)=>({
            productFormVisible: !prevState.productFormVisible
        }))
    }
 
    // Method to handle adding a new product
    handleAddingNewProduct = (newProduct) =>{
        if (newProduct.photo === undefined){
            newProduct.photo = Default_image
        }
        const newProductList = this.state.actualProductList.concat(newProduct)
        this.setState({
            actualProductList: newProductList,
            ProductFormVisibleOn: false
        })
    };
    // Method to handle click event on a product
    handleChangingSelectedProduct = (id) => {
        const selectedProduct = this.state.actualProductList.filter(products => product.id === id)[0]
        this.setState({selectedProduct: selectedProduct});
    }
   render() {
       let currentVisibleState = null;
       let buttonText = null
       if (this.state.productFormVisible){
           currentVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct} />
           buttonText = 'Go back to Product List'
       }else{
           currentVisibleState = <ProductList productList = {this.state.actualProductList} /> //new code
           buttonText = 'Add A Product'
       }
       return (
        <React.Fragment>
              
        <AddProduct
        whenButtonClicked = {this.handleClick}
        buttonText = {buttonText} />
       
        {currentVisibleState}
    </React.Fragment>
       )
   }
}

export default ProductControl