import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

// const RestaurantCard = (props) => {
const RestaurantCard = (props) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, id } = props?.resData?.data;

    return (
        <Link to={'/restaurant/' + id} key={id}>
            <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
        </Link>
    )
}

export default RestaurantCard;