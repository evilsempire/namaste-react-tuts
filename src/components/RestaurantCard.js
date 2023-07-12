import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

// const RestaurantCard = (props) => {
const RestaurantCard = (props) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, id } = props?.resData?.data;

    return (
        <Link to={'/restaurant/' + id} key={id} className="font-sans w-[260px] p-4 m-1 
        border-solid border-1 border-gray-50
        hover:border-solid hover:border-2 hover:border-gray-200 hover:shadow  hover:shadow-zinc-300">
            <div >
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-semibold text-xl py-1">{name}</h3>
            <h4 className="text-sm py-1">{cuisines.join(", ")}</h4>
            <div className="flex space-x-5 py-1">
            <h4 className="text-sm">{avgRating} ★</h4>
            <h4 className="text-sm">{deliveryTime} MINS</h4>
            <h4 className="text-sm">₹{costForTwo / 100} FOR TWO</h4>
            </div>
        </div>
        </Link>
    )
}

export default RestaurantCard;