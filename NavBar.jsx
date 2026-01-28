import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Navbar() {
const count = useSelector(state => state.cart.items.length);


return (
<nav>
<Link to="/">Home</Link> |
<Link to="/plants">Plants</Link> |
<Link to="/cart">Cart ({count})</Link>
</nav>
);
}
