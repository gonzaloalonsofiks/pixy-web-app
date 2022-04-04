import { createContext, useState, useContext } from "react";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";

const CartContext = createContext([]);

export const useCartContext = () => {
  useContext(CartContext);
  return useContext(CartContext);
};

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [orderID, setOrderID] = useState(null);

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const addToList = (item) => {
    if (isInCart(item.id)) {
      let itemIndex = cartList.findIndex((prod) => prod.id === item.id);
      cartList[itemIndex].quantity += item.quantity;
    } else {
      setCartList([...cartList, item]);
    }
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const subtotal = (quantity, price) => {
    return quantity * price;
  };

  const removeItem = (itemIndex) => {
    setCartList(cartList.filter((item) => item.id !== itemIndex));
  };

  const totalCart = () => {
    let sum = cartList.reduce(
      (subtotal, item) => (subtotal = subtotal + item.price * item.quantity),
      0
    );
    return sum;
  };

  const totalItems = () => {
    let units = cartList.reduce(
      (unitsInitial, unit) => (unitsInitial = unitsInitial + unit.quantity),
      0
    );
    return units;
  };

  const createOrder = async (e) => {
    e.preventDefault();

    let order = {};

    order.buyer = dataForm;

    order.total = totalCart();

    order.date = Timestamp.fromDate(new Date())

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const quantity = cartItem.quantity;
      const subtotal = cartItem.price * cartItem.quantity;

      return { id, name, quantity, subtotal };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((response) => setOrderID(response.id))
      .catch((error) => console.error(error))
      .finally(() => console.log("Terminado"));
  };


  const [dataForm, setDataForm] = useState({
    fname: "",
    lname: "",
    email: "",
    cellphone: "",
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalCart,
        addToList,
        emptyCart,
        subtotal,
        removeItem,
        totalItems,
        createOrder,
        dataForm,
        handleChange,
        orderID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
