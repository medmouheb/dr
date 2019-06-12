

const initialState = {
    Card: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_CARD:
            state.Card.push(" Produit ")
            
    }
   return state 
};

export default reducer;