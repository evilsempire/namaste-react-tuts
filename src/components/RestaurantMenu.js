import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {RESTO_MENU_URL} from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";


const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams();
    const resInfo = useRestaurantData(resId);
    // useEffect(() => {
    //     fetchMenu()
    // }, [])

    // fetchMenu = async () => {
    //     const data = await fetch(RESTO_MENU_URL + resId);

    //     const result = await data.json();

    //     console.log(result)
    //     setResInfo(result)
    // }

     if(resInfo === null) return <Shimmer />;
    const {name, cuisines, cloudinaryImageId,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        
            <div className="menu">
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
                <ul>
                    {itemCards.map((item, index) => <li key={index}>{item.card.info.name} - Rs {Math.floor(item.card.info.price/100)}</li>)}
                    
                </ul>
            </div>
    )
}


export default RestaurantMenu;