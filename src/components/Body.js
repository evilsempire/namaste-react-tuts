import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; //named import

const Body = () => {

    //local state variable => maintains the state of the react component

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);


    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            res => res.data.avgRating > 4
                        )

                        setListOfRestaurant(filteredList)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* will contain lot restro cards */}
                {
                    listOfRestaurants.map(resObject => <RestaurantCard
                        resData={resObject}
                    />)
                }
            </div>
        </div>
    )
}


export default Body;