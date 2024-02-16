import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const cart = useSelector((store) => store.cart);
  const modalIsOpen = useSelector((store) => store.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  return (
    <main>
      {modalIsOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
