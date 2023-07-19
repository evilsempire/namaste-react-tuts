import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {

    console.log(items)

    return (
        <div className="">
            {
                items.map((item) => {
                    return <div className="flex justify-between  pb-4 mb-4 border-b-2 border-slate-200"
                        key={item.card.info.id}>
                        <div className="text-left w-10/12">
                            <div className="font-bold">{item.card.info.name}</div>
                            <div>₹ {item.card.info.price / 100}</div>
                            <div className="text-xs text-slate-500 ">
                                {item.card.info.description}
                            </div>
                        </div>
                        <div className="w-2/12">
                            <div className="absolute px-6 py-14 mb-3">
                                <button className="my-5 px-4 py-1 shadow-lg rounded-sm  
                                mb-1/4 text-sm bg-white text-green-400 font-bold">
                                    Add+
                                </button>
                            </div>
                            <img
                                className="w-32 h-24 rounded-lg"
                                alt="res-logo"
                                src={CDN_URL + item.card.info.imageId} />

                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ItemList;