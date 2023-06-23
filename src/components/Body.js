import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react"; //named import

const Body = () => {

    //local state variable => maintains the state of the react component

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([])
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {

        fetchData();

    }, [])


    fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json)
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    const onlineStatus = useOnlineStatus();

    /** This is not a good option to show loading screen */
    /** Rather you can use shimmer UI. */
    /** Also know as conditional rendering */
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer> </Shimmer>
    // }

    /**
     * You can use ternary operator also instead of conditional rendering
     */

    if(!onlineStatus){
        return <h2>Oops! You are offline.</h2>
    }

    return listOfRestaurants.length === 0 ? <Shimmer> </Shimmer> : <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" onChange={(e) => {
                    setSearchValue(e.target.value);
                }}/>
                <button onClick={() => {
                    //filter the restaurant card and update the filter

                    console.log(searchValue);
                    const filteredList = listOfRestaurants.filter(
                        res => res.data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                    )
                    setFilteredRestaurant(filteredList)

                    //need search Text here
                }}>Search</button>
            </div>
            <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        res => res.data.avgRating > 4
                    )
                    setFilteredRestaurant(filteredList)
                }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {/* will contain lot restro cards */}
            {
                filteredRestaurants.map((resObject, index) => <RestaurantCard
                    key={index}
                    resData={resObject}
                />)
            }
        </div>
    </div>
}


export default Body;