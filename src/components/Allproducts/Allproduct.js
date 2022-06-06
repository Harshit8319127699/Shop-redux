import React,{useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import "./All.css"
import { setproducts } from '../../redux/Actions/Actions'
function Allproduct() {
  const navigate=useNavigate()
const dispatch=useDispatch()
    useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(function(response) {
dispatch(setproducts(response.data))
    })
    .catch(function(error) { 
        console.log(error);
    });
  }, [])
  const state=useSelector(state=>state.allproducts.products)
  console.log(state);
const handler=(e)=>{
navigate(`/product/${e.target.id}`)
}

  const hold=state.map((elem,index)=>{
return <div className="card" key={index} id={elem.id} onClick={handler}>
<div className="imagecard" id={elem.id}>
  <img id={elem.id} src={elem.image} alt="" />
</div>
<div id={elem.id} className='details'>
<h4 id={elem.id}>Title: {elem.title}</h4>
<p id={elem.id}>Price:{elem.price}</p>
<p id={elem.id}>Ratings:3</p>
</div>

</div>
  })
  
  
    return (
    <div className="allproduct">
      {state.length>0?hold:<h1 className='loading'>Loading.....</h1>}
    </div>
  )
}

export default Allproduct