import { createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    useContext(CartContext)
    return useContext(CartContext)
}

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => {
        return cartList.some((item) => item.id === id)
    }

    const addToList = (item) => {
        if (isInCart(item.id)){
            let itemIndex = cartList.findIndex(prod => prod.id === item.id)
            cartList[itemIndex].cantidad += item.cantidad
        } else {
            setCartList ([...cartList, item])
        }
    }

    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToList,
            emptyCart}}>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider