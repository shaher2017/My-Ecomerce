import { useEffect, useState } from "react";
import "./productdetails.css";
import { useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import {addItem} from "../cart/slices";
import {useDispatch} from 'react-redux';
import axiosinstance from "../axiosconfig";

const Productdetails = ()=>{
    const[detail,setDetails] = useState({})
    const params = useParams();
    useEffect(
        ()=>{
          axiosinstance.get(`products/${params.id}`)
        .then((response)=>{
            setDetails(response.data);})
        .catch((error)=>{console.log(error);})}
    ,[params]);

    const dispatch = useDispatch();
    const buying =()=>{
      dispatch(addItem(detail));
    }
return<div className="details-cont">

    <img src={detail.thumbnail} alt=""/>
    <div className="details">
        <h1 style={{fontWeight:"bold"}}>{detail.title}</h1>
        <span>{detail.description}</span>
        <div
  style={{
    direction: 'ltr',
    fontFamily: 'sans-serif',
    touchAction: 'none'
  }}
>
  <Rating
  allowFraction
    initialValue={Number(detail.rating).toFixed(2)}
    onClick={function noRefCheck(){}}
    readonly
  />
</div>

        {detail.discountPercentage ? 
        <div><p style={{ textDecoration: 'line-through',marginTop:"25px" }}>{detail.price} $</p>
        <p style={{color:"green"}}> Discounted by: {detail.discountPercentage}%</p>
        <p style={{color:"#73ff00"}}>The price is: {(Number(detail.price)*(1-(Number(detail.discountPercentage)/100))).toFixed(2)} $</p>
        </div> : <p>{detail.price}</p> }
        {Number(detail.stock) > 0 ? 
        <p style={{color:"white", backgroundColor:"green",padding:"3px", borderRadius:"3px",marginTop:"25px"}}>In Stock</p>
         : <p>out of stock</p>}
         <div className="btns"><button className="buynow">Buy Now</button>
         <button onClick={()=>{buying()}} className="addtocart">Add to Cart</button>
</div>     
    </div>
</div>

};
export default Productdetails;