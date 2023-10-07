import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import Cartitem from "../cartitem/cartitem";
import { resetItems } from "../cart/slices";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.cartitems);

  let [totalPrice, setTotalPrice] = useState(
    selector.reduce((sum, item) => sum + item.quantity * item.price, 0)
  );

  useEffect(() =>{setTotalPrice(
    selector.reduce((sum, item) => sum + item.quantity * item.price, 0)
  );}, [selector]);
  return (
    <div className="cart-content">
      
      <h1>Cart Items</h1>
      {selector.length !== 0 ? (
        <Button onClick={()=>dispatch(resetItems())} style={{ marginTop: "5px" }} variant="danger">
          Reset the Cart
        </Button>
      ) : null}
      {selector.length >0 ? <div className="items">
      {selector.map((item,index)=><Cartitem key={index} product={item} />)}
      </div> : <p>No Items Bought Yet !</p>}
      
      <div className="total-content">
        <p className="total">The Total price: {totalPrice} </p>
      </div>
    </div>
  );
};

export default Cart;
