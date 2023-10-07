import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"
import { useRef, useContext } from 'react';
import { Rating } from 'react-simple-star-rating'
import {useDispatch} from 'react-redux';
import {addItem} from "../cart/slices"
import { useNavigate } from 'react-router-dom';
import {Theme} from "../contexts/theme";
const Productcard = (props)=>{
  const stockdiv = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { theme} = useContext(Theme);
    const cardClassName = theme === "dark" ? "darkcard" : null;
  if(props.product.stock <= 0){
    stockdiv.current.style.backgroundColor = "red";
  }

  const viewproduct = (id)=>{
    navigate(`/productdetails/${id}`);
  }
  const buying =(id)=>{
    dispatch(addItem(id));
  }
    return (
      
        <Card style={{ width: '20rem'}}>
          <Card.Img className='prod-img' variant="top" src={props.product.thumbnail} />
          <Card.Body className={cardClassName}>
          <Card.Title style={{cursor:"pointer"}} onClick={()=>{viewproduct(props.product.id)}}>{props.product.title}</Card.Title>
            <Card.Text className='prod-desc'>
            {props.product.description}
            </Card.Text>
            <Card.Text className='price'>
            {props.product.price} $
            </Card.Text>
            
            <div
  style={{
    direction: 'ltr',
    fontFamily: 'sans-serif',
    touchAction: 'none'
  }}
>
  <Rating
  allowFraction
    initialValue={Number(props.product.rating).toFixed(2)}
    onClick={function noRefCheck(){}}
    readonly
  />
</div>
           
            <div className='stock'>{props.product.stock > 0 ? "in Stock" : "Not in Stock"}</div>
            <Button className='buybtn' onClick={()=>{buying(props.product)}} variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>
      );
};
export default Productcard;