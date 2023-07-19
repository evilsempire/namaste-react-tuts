import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {RESTO_MENU_URL} from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import RestaurantCategory from "./RestaurantCategory";


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

    // console.log(resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR);

    const restuarantCategories = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(category => {
        if(category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") return true;
    });

    // console.log(restuarantCategories);

    return (
        
            <div className="text-center">
                <h1 className="my-5 font-bold text-2xl">{name}</h1>
                <h3 className="from-neutral-400 text-sm">{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
                {/* <ul>
                    {itemCards.map((item, index) => <li key={index}>{item.card.info.name} - Rs {Math.floor(item.card.info.price/100)}</li>)}
                    
                </ul> */}
                {
                    restuarantCategories.map((category, index) => <RestaurantCategory category={category} key={index} className="inline-block" />)
                }
            </div>
    )
}


export default RestaurantMenu;