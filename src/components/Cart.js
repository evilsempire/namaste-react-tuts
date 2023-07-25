import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    clearCartItems = () => {

        dispatch(clearCart())
    }

    return <div className="text-center m-4 p-4">
        <h1 className="font-semibold text-xl">Cart</h1>
        {
            cartItems.length === 0 ? "Add items to see in cart" : (<>
                <button className="bg-black text-sm text-white m-1 px-2 py-1 rounded-sm shadow-sm"
                    onClick={clearCartItems}
                >
                    Clear Cart
                </button>
                <div className="w-6/12 m-auto mt-3">
                    <ItemList

                        items={cartItems}
                    />
                </div>
            </>)
        }
    </div>
}

export default Cart;