
/* data c'est props */
/* action va à tous les reducers*/

const addToCardAction = (data) => {
    return{
        type: "ADD_TO_CARD",
        product: data
    }
}
const removeFromCart =(data)=>{
    return{
        type: "REMOVE_FROM_CART",
        product: data 
    }
} 
const addFilter=(data)=>{
    return{
        type:"ADD_FILTER",
        filters:data
    }
}
export {addToCardAction,removeFromCart,addFilter}