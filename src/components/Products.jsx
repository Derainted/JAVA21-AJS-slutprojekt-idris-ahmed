import {useState} from "react";
import { productList } from "./list/productList";

export default function Products({setProductsToCart, productsToCart, setNrElementsCart}){

    const [formData, setFormData] = useState({
        nrOfItems: 0,
        prodId: ''
    });

    function addCart(event){
        event.preventDefault();
        if (formData.nrOfItems > 0){
            productsToCart.push(formData);
            setProductsToCart(productsToCart);
            nrItemsInCart();
        }
    }

    function handleChange({target}) {
            setFormData({
            nrOfItems: target.value,
            prodId: target.id
        })
    }

    function nrItemsInCart(){
        let nrElements = 0;
        productsToCart.map(p => (nrElements+=parseInt(p.nrOfItems)))
        setNrElementsCart(nrElements);
    }
   
   
    return (
        
        productList.map(product =>
            (
                
            <div className="products" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.img_src} alt="testimage" width="150" />
                <h3>Price: {product.price}kr</h3>
                <form>
                    <input id={product.id} type="number" min="0" placeholder="Number of items" onChange={handleChange}/>
                    <button id={product.id} onClick={addCart}> ADD TO CART </button>
                </form>
            </div>
            )
        )
    )
}