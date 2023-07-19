const CategoryItem = ({ itemCard }) => {
    console.log(itemCard);

    return (<div className="border-b-2 border-gray-200 my-2">
        <div className="font-bold ">{itemCard.card.info.name}</div>
        <div className="text-base">₹ {itemCard.card.info.price / 100}</div>
        <div className="text-sm">{itemCard.card.info.description}</div>
    </div>)
}

export default CategoryItem;