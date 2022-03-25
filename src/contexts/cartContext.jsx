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

    const subtotal = (quantity, price) => {
        return quantity * price
    }

    const removeItem = (itemIndex) =>{
        setCartList(cartList.filter(item => item.id !== itemIndex))
    }

    const totalCart = () => {

        let sum = cartList.reduce((subtotal, item) => subtotal = subtotal + item.price * item.cantidad, 0)
        return sum
    }

    const totalItems = () => {
        let units = cartList.reduce((unitsInitial, unit) => unitsInitial = unitsInitial + unit.cantidad, 0)
        return units
    }

    return (
        <CartContext.Provider value={{
            cartList,
            totalCart,
            addToList,
            emptyCart,
            subtotal,
            removeItem,
            totalItems,
            }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider