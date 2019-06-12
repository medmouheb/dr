const initState={
    filters:[]
}

const ProductReducer=(state = initState, action)=>{
    if(action.type==="ADD_FILTER"){
        return{
            ...state,
            filters:action.filters
        }
    }
    else{
        return{
            ...state
        }
    }
}
export default ProductReducer