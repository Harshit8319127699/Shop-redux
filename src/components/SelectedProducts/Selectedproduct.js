import React,{useEffect} from 'react'
import "./Selected.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedproducts,removeselectedproducts } from '../../redux/Actions/Actions';


function Selectedproduct() {
    const {id} =useParams('/product/:id')
    const productid=id
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product)
    console.log(products)
  const { title, image, price, category, description } = products


    const fetchdetails = async () => {
        const response = await axios.get(`http://fakestoreapi.com/products/${productid}`).
          catch(err => console.log(err))
        dispatch(selectedproducts(response.data))
      }
      useEffect(() => {
        if (productid && productid!== "") {
          fetchdetails()
        return ()=>{
          dispatch(removeselectedproducts())
        }
        }
      }, [productid])
const holder=<div className="hold">
<div className='left1'>
<img src={image} alt="" />
</div>
<div className='right1'>
  <h2 id='head11'>{title}</h2>
  <h5>{price}</h5>
  <h3>{category}</h3>
  <p>{description}</p>

</div>
</div>
  
    return (
    <div className='container2'>
      {Object.keys(products).length>0?holder:<h1 className='load'>Loading...</h1> }
    </div>
  )
}

export default Selectedproduct