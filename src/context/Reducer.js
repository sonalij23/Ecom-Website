const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) => 
            item.id === action.payload.id
              ? { ...item, qty:item.qty + action.payload.qty ||  item.qty + 1 }
              : item
          ),
        };
      }else{
        const qty = action.payload.qty || 1

        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: qty}],
        };
      }
     
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, { ...action.payload }],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case "UPDATE_QTY":
      let cartItem =  state.cart.find((item)=>item.id === action.payload.id);
       if(cartItem){
        return{
          ...state,
  
        cart: state.cart.map((item)=> item.id === action.payload.id ? {...item , qty:  action.payload.qty }: item) 
        }
       }

    default:
      return state;
  }
};

export default cartReducer;
