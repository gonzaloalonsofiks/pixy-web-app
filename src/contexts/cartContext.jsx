import { createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    useContext(CartContext)
}

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToList = (item) => {
        setCartList([... cartList, item])
    }

    const emptyCart = () => {
        setCartList([])
    }

    const userName = "Gonzalo"

    return (

        <CartContext.Provider value={{
            cartList,
            addToList,
            emptyCart,
            userName }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider