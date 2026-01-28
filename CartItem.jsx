import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";


export default function CartItem() {
const cart = useSelector(state => state.cart.items);
const dispatch = useDispatch();


const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);


return (
<div>
<Navbar />
<h2>Shopping Cart</h2>
{cart.map(item => (
<div key={item.id}>
<img src={item.img} />
<h4>{item.name}</h4>
<p>₹{item.price}</p>
<button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
{item.quantity}
<button onClick={() => dispatch(increaseQty(item.id))}>+</button>
<p>Total: ₹{item.price * item.quantity}</p>
<button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
</div>
))}
<h3>Grand Total: ₹{total}</h3>
<button>Checkout (Coming Soon)</button>
</div>
);
}
