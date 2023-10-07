import "./productlist.css";
import Productcard from "../card/card"
import { useContext, useEffect, useState } from "react";
import { Lang } from "../contexts/lang";
import axiosinstance  from "../axiosconfig";
const Productlist= ()=>{
    const [products,setProducts]=useState([]);
    const { lang} = useContext(Lang);
  
    const productLang = lang === "ar" ? "artheme" : null;
    useEffect(() => {
      axiosinstance
        .get('/products')
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div>
      <div className={`products ${productLang}`}>
        {products.map((product, index) =>
          (
            
              <Productcard
              key={index}
              product={product}
              />)
        )}
      </div></div>
    );
  };
export default Productlist;