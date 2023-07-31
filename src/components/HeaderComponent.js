import { useContext, useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const HeaderComponent = () => {

    let btnName = "Login";

    let [btnNameReact, setbtnNameReact] = useState("Login")
    
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector(state => state.cart.items)

    return (
        <div className="flex justify-between drop-shadow bg-gray-50">
            <div className="logo" >
                {/* logo */}
                <img data-testid="logo" className='w-24 p-4 m-4' src={`${LOGO_URL}`} />
            </div>
            <div className="flex nav-items">
                <ul className='flex flex-row m-4 p-4 space-x-4 ali'>
                    <li data-testid="online-status" >
                       {onlineStatus ? "🟢" : "🔴" }
                    </li>
                    <li className=''>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart" >
                            Cart - <span className='font-semibold' data-testId="cart"> ({cartItems.length} Items)</span>
                        </Link>
                    </li>
                    <li>
                    <button className='login' onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login")
                    }}>{ btnNameReact }</button>
                    </li>

                    <li>
                        {loggedInUser}
                    </li>
                 </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;