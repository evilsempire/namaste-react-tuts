import {LOGO_URL} from '../utils/constants';


const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                {/* logo */}
                <img src={`${LOGO_URL}`} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;