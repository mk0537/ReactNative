import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM' :
            return [...state, action.payload];
        case 'REMOVE_ITEM' :
            // 조건에 맞는 것만 골라서 새 배열에 넣음
            return state.filter(item => item.id !== action.payload.id)
    }
}


export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer,[]);

    return(
            <CartContext.Provider value={{cart, dispatch}}>
                {children}
            </CartContext.Provider>
        )
}

