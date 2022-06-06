const initialState={
    products:[]
}


export const Productreducer=(state=initialState,action)=>{
switch (action.type) {
    case "Set_Products":
        return {
            ...state,products:action.payload
        }
        

    default:{
        return state;

    }
}

}
export const selectedProductreducer=(state={},action)=>{
switch (action.type) {
    case "Selected_Products":
        return{
            ...state,...action.payload
        }
    case "Remove_Selected_Product":
        return {}    

    default:
        return state;
}
}