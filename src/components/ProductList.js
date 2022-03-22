
import React from 'react';
import '../Styles/ProductList.css';
import Product from './Product';
import NewProductForm from './NewProductForm';

import tshirt from './Images/tshirt.png';
import backpack from './Images/backpack.png';
import pants from './Images/pants.png';
import trekkingshoes from './Images/trekkingshoes.png';
import jacket from './Images/jacket.png';
import tshirt_ladies from './Images/tshirt_ladies.png';

// ActualProductList
const actualProductList = [
  
    {
        name: 'T-Shirt',
        price: '599',
        id: "1"
    },
    {
        name: 'BackPack',
        price: '1500',
        id: "2"
    },
    {
        name: 'Pants',
        price: '1000',
        id: '3'
    },
    {
        name: 'Trekking Shoes',
        price: '2000',
        id: '4'
    },
    {
        name: 'Jacket',
        price: '1500',
        id: '5'
    },
    {
        name:'T-Shirt Ladies',
        price: '650',
        id: '6'
    }
 ]
 function ProductList() {
    return (
        <React.Fragment>
        <div className='container' id="products">
            <div className="row pdg-line">
 
                {/* Product Title */}
                <div className="col-4 col-sm-4 col-md-4">
 
                            <div className="abt-top-border"> </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <p className="product-title text-center">PRODUCTS </p>
                            <p className="mx-auto icons">
                               <img src={tshirt} className="products" alt="tshirt.png"/>
                               <img src={backpack} className="products" alt="backpack"/>
                               <img src={pants} className="products" alt="pants"/>
                               <img src={trekkingshoes} className="products" alt="trekkingshoes"/>
                               <img src={jacket} className="products" alt="jacket"/>
                               <img src={tshirt_ladies} className="products" alt="tshirt_ladies"/>
                               </p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="abt-top-border"> </div>
                </div>
               
            </div>
 
            {/* Product List */}
            <div className="men-products">
                <div className="row">
                {actualProductList.map((product) =>
                    <  Product 
                    photo = {product.photo}
                    name = {product.name}
                    price = {product.price}
                    id = {product.id}
                    key= {product.id}/>
 
                )}
                </div>
 
            </div>
 
        </div>
 
        </React.Fragment>
    )
 }

export default ProductList