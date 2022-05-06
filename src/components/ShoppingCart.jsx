import { productList } from "./list/productList";

export default function ShoppingCart({productsToCart, setPage, setLoggedIn,  setProductsToCart, setNrElementsCart, userName}){
    
    let totalSum = 0;

    function sum( name, id, nritems, price){
        totalSum += parseInt(nritems) * parseInt(price);
        
    }

    function checkOut(){        
        setProductsToCart([]);
        alert('Purchase Succesfull!');
        setLoggedIn(false);
        setPage('pageLogin');
        setNrElementsCart(0);
    }
    

    return (
        <div className="shoppingcart">
            <h1>{userName}  shoppingcart</h1>
            <ol>
                {
                productsToCart.map(shoppingItem =>
                    productList.map(
                        content =>
                        content.id==shoppingItem.prodId ?
                        sum(content.name,shoppingItem.prodId,shoppingItem.nrOfItems,content.price)
                        :
                       false
                    )  
                )
                }
                <h3>
                    Sum: {totalSum}kr
                    <br />
                    <button onClick={checkOut}> Checkout </button>
                    
                </h3>
                
            </ol>
            
        </div>
        
    )
}