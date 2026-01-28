import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";


const plants = [
{ id: 1, name: "Aloe Vera", price: 200, category: "Succulents", img: "https://via.placeholder.com/100" },
{ id: 2, name: "Snake Plant", price: 250, category: "Indoor", img: "https://via.placeholder.com/100" },
{ id: 3, name: "Peace Lily", price: 300, category: "Indoor", img: "https://via.placeholder.com/100" },
{ id: 4, name: "Cactus", price: 150, category: "Succulents", img: "https://via.placeholder.com/100" },
{ id: 5, name: "Bonsai", price: 500, category: "Decorative", img: "https://via.placeholder.com/100" },
{ id: 6, name: "Money Plant", price: 180, category: "Decorative", img: "https://via.placeholder.com/100" }
];


export default function ProductList() {
const dispatch = useDispatch();
const cart = useSelector(state => state.cart.items);


return (
<div>
<Navbar />
{['Indoor','Succulents','Decorative'].map(cat => (
<div key={cat}>
<h2>{cat}</h2>
{plants.filter(p => p.category === cat).map(p => (
<div key={p.id}>
<img src={p.img} />
<h4>{p.name}</h4>
<p>₹{p.price}</p>
<button
disabled={cart.some(i => i.id === p.id)}
onClick={() => dispatch(addToCart(p))}
>Add to Cart</button>
</div>
))}
</div>
))}
</div>
);
}
