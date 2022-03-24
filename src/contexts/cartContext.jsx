import { createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    useContext(CartContext)
    return useContext(CartContext)
}

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToList = (item) => {
        if (cartList.find(e => e = item)) {
            console.log('Ya está agregado')
        }else{
            setCartList([...cartList, item])
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