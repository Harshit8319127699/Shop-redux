import { combineReducers } from "redux";
import { Productreducer,selectedProductreducer } from "../Reducer/Reducer";



const reducers=combineReducers({
    allproducts:Productreducer,
    product:selectedProductreducer
})
export default reducers
