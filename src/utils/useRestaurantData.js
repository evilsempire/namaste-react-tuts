import { useEffect, useState } from "react";
import { RESTO_MENU_URL } from "./constants";


const useRestaurantData = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => { 
        const result = await fetch(RESTO_MENU_URL + resId);

        const json = await result.json();

        setResInfo(json);
    }

    return resInfo;

}


export default useRestaurantData;