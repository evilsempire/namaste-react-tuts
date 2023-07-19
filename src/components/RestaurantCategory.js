import {useState } from "react";
import CategoryItem from "./CategoryItem";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {

    const [showItems, setShowItems] = useState(false);

    handleClick = () => {
        setShowItems(!showItems)
    }

    return (
        <div className="m-auto w-6/12 mb-4">
            <div className="p-2 shadow-md shadow-slate-300 m-2">
                <div className="flex justify-between pb-1 cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">
                        {category.card.card.title} ({category.card.card.itemCards.length})
                    </span>
                    <span className="text-xl">
                        {/* ▿ */}
                        {/* ☟ */}
                        ▼
                    </span>
                </div>

                {/* <div>
            {
                category.card.card.itemCards.map((itemCard, index) => <CategoryItem key={index} itemCard={itemCard}/>)
            }
            </div> */}

                {showItems && <ItemList items={category.card.card.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;