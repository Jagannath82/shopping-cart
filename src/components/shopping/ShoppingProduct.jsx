import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from "../../slice/ShoppingCartSlice";


export default function ShoppingProduct({ imgName, productName, price, productId }) {

    const [quantity, setQuantity] = useState(0)

    const dispatch =  useDispatch();

    function addMyProduct(){
        console.log(productId);
        if(productId){
            dispatch(addProduct({
                productId: productId,
                quantity: quantity,
            }))
        }
    }

    

    return (<><div class="col-md-4">
        <div class="hover01 column">
            <figure><img src={imgName} alt="imageOne" /></figure>
        </div>
        <h3 class="harshal_text">{productName}</h3>
        <h3 class="rate_text">${price}</h3>
        <div class="form-group row">
            <div class="col-xs-2">
                <label for="usr">Quantity:</label>
                <input type="number" class="form-control" id="quantity" onChange={(e) => setQuantity(e.target.value)}/>
            </div>
        </div>
        <div class="read_bt_1"><button class="btn btn-primary" onClick={addMyProduct}>Add to Cart</button></div>
    </div></>);
}
