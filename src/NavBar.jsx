import { Link } from "react-router-dom";
function NavBar (){
    return (
        <div className="navBar">
            <ul>
                <li>
                    < Link to="/">Home</Link>
                    </li>
                <li>
                < Link to="/about">About</Link>
                    </li>
                <li>
                < Link to="/contact">Contact</Link>
                    </li>
                    <li>
                < Link to="/selectColor">Slect Car color</Link>
                    </li>
                    <li><Link to="/todoList"> Write your List</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;