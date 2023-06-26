import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const HeaderComponent = () => {

    let btnName = "Login";

    let [btnNameReact, setbtnNameReact] = useState("Login")
    
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo">
                {/* logo */}
                <img src={`${LOGO_URL}`} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       Online Status: {onlineStatus ? <img src="https://cdn3.emoji.gg/emojis/5251-online-status.png" width="32px" height="32px"/> :
                            offline
                        }
                    </li>
                    <li>
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
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login")
                    }}>{ btnNameReact }</button>
                 </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;