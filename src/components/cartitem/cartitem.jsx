import "./cartitem.css";
import { Rating } from 'react-simple-star-rating';
import Button from 'react-bootstrap/Button';
import { deleteItem,increaseQuantity,decreaseQuantity } from "../cart/slices";
import { useDispatch } from "react-redux";

const Cartitem = (props) => {
  const dispatch = useDispatch();
  const decquan = ()=>{
    dispatch(decreaseQuantity(props.product));
  };
  const incquan = ()=>{
    dispatch(increaseQuantity(props.product));
  }

  const deleteitem = ()=>{
    dispatch(deleteItem(props.product));
  }
  return (
    <div className="item">
      {props.product.id}
      <img className="proimg" src={props.product.thumbnail} alt="" />
      <p style={{ fontWeight: "bold" }}>{props.product.title}</p>

      <div
        style={{
          direction: 'ltr',
          fontFamily: 'sans-serif',
          touchAction: 'none',
        }}
      >
        <Rating
          allowFraction
          initialValue={Number(props.product.rating).toFixed(2)}
          onClick={function noRefCheck(){}}
          readonly
        />
      </div>
      <p>{props.product.price} $</p>
      <div className="quan">
      <Button onClick={decquan} variant="success">-</Button>
        <label>{props.product.quantity}</label>
      <Button onClick={incquan}  variant="success">+</Button>
      </div>
      <p className="totalprice">{props.product.price * props.product.quantity} $</p>
      <Button onClick={deleteitem} variant="danger">Delete</Button>
    </div>
  );
};

export default Cartitem;
