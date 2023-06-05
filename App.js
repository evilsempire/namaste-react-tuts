import React from "react";
import ReactDOM from "react-dom/client";


//Components
//1. class based components => OLD
//2. function based components => NEW


/**
 * Header
 *  - Logo
 *  - Navbar
 * Body
 *  - SearchBar
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - image
 *          - name, star rating, cuisins, delivery time
 *          
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 */

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                {/* logo */}
                <img src="https://www.logodesign.net/logo/food-cloche-2836ld.png?nwm=1&nws=1&industry=food&sf=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "103112",
        "name": "Ranjana's Rannaghor",
        "uuid": "f7dd95da-c4db-49ce-bbe8-d385a1b9e50c",
        "city": "5",
        "area": "Powai",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "kswp0svwfg9kpgvdcrji",
        "cuisines": [
            "Bengali",
            "Biryani",

        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
            "restaurant": "ranjanas-rannaghor-khairanisakinaka-vam",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "gala number-3A,Stanny compound,behind bismillah hotel,khairani,Sakinaka,400072",
        "locality": "stanny compound",
        "parentId": 10658,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
            {
                "type": "PROMOTED"
            }
        ],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "distance",
                    "fee": 5500,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 5500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5500",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6789973~p=1~eid=00000188-208b-1270-52fb-e51000b1011a",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "103112",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 4.900000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "78036",
        "name": "Burger King",
        "uuid": "c04163ad-ab93-4fce-81da-e87d4f2687b0",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
            "restaurant": "burger-king-cst-road-scruz-bandra-east",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "unit no G2, Ground floor , Central Plaza , 166,CST Road, Kalina, Mumbai 400098",
        "locality": "Central Plaza, Kalina",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹129",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "78036",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "592072",
        "name": "Buddha Belly",
        "uuid": "3d17ac09-3f38-4e0a-9224-803d1708c6bf",
        "city": "5",
        "area": "Powai",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "z5hcctjohrooutebqkrp",
        "cuisines": [
            "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
            "restaurant": "buddha-belly-powai-powai",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Gala No. 3A, Stanny compound, near SJ Studios, Kherani Road, Sakinaka, Andheri East, Mumbai  -  400072",
        "locality": "Near Sj Studios",
        "parentId": 50711,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
            {
                "type": "PROMOTED"
            }
        ],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "distance",
                    "fee": 5500,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 5500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5500",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6789979~p=4~eid=00000188-208b-1270-52fb-e51100b10447",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "592072",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 4.900000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "153348",
        "name": "Nawab Seekh Corner",
        "uuid": "f1385485-35be-485a-8b97-b7a76f1e46f6",
        "city": "5",
        "area": "Mumbai",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ssbxpgkn1fmjljx8p2k4",
        "cuisines": [
            "North Indian"
        ],
        "tags": [],
        "costForTwo": 55000,
        "costForTwoString": "₹550 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 0.10000000149011612,
        "slugs": {
            "restaurant": "nawab-seekh-corner-kurla-kurla",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Nawab Seekh Corner, Near Delhi Zaika and Kalpana Cinema, LBS Marg, Kurla West, Kurla, Mumbai",
        "locality": "Kurla",
        "parentId": 144982,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "0.1 kms",
        "hasSurge": false,
        "sla": {
            "restaurantId": "153348",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "lastMileTravel": 0.10000000149011612,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "9862",
        "name": "Pizza Hut",
        "uuid": "f34f58f5-9a7f-4964-b218-267e8b436cca",
        "city": "5",
        "area": "Bandra Kurla Complex",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "cuisines": [
            "Pizzas"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
            "restaurant": "pizza-hut-bkc-scruz-bandra-east",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "BPCL petrol Pump,Opp citi group,Bandra Kurla complex",
        "locality": "Bandra Kurla Complex",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "sla": {
            "restaurantId": "9862",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "558027",
        "name": "House Of Momo",
        "uuid": "6f391795-f7fe-4b37-8c12-460dfe1fea92",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "db307f803492524685f8561c837b70d1",
        "cuisines": [
            "Chinese",
            "Asian"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
            "restaurant": "house-of-momos-scruz-bandra-east-scruz-bandra-east",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Gala No. 28, Ground Floor, Swastik Industrial Estate, Kalina, Bandra East, Mumbai, Maharashtra 400098.",
        "locality": "Swastik Industrial Estate",
        "parentId": 103714,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
            {
                "type": "PROMOTED"
            }
        ],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6762809~p=7~eid=00000188-208b-1270-52fb-e51200b10741",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "558027",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 1.399999976158142,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "106763",
        "name": "Rangoon Zaika",
        "uuid": "cd078e24-0fae-46d9-9e45-ccedc30a0834",
        "city": "5",
        "area": "Kurla West",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "o5bbufmcjoqdfvtm7r1n",
        "cuisines": [
            "Indian",
            "Chinese"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
            "restaurant": "rangoon-zaika-kurla-kurla",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Shop 4B-4C, Opposite Kalpana Cinema, Beside Ansari Weight Bridge, LBS Marg, Kurla, Mumbai",
        "locality": "Kurla",
        "parentId": 166932,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "106763",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 0.6000000238418579,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "48030",
        "name": "Sahara Hotel - Kurla",
        "uuid": "4ffa188b-b74e-4b62-b141-de7a145f8efe",
        "city": "5",
        "area": "Kurla",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "qhd1a0qhl4iuaiwpf5rs",
        "cuisines": [
            "North Indian",
            "Chinese",
            "Mughlai",
            "Beverages"
        ],
        "tags": [],
        "costForTwo": 65000,
        "costForTwoString": "₹650 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
            "restaurant": "sahara-hotel-kurla-kurla",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Near Kalpana Cinema, LBS Marg, Kurla West, Kurla, Mumbai",
        "locality": "Near Kalpana Cinema",
        "parentId": 174631,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "15% OFF",
            "subHeader": "UPTO ₹45",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "48030",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 0.699999988079071,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "418298",
        "name": "KFC",
        "uuid": "c71a18dd-b8c9-4bfa-9ede-879430a88b04",
        "city": "5",
        "area": "Bandra",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 6.800000190734863,
        "slugs": {
            "restaurant": "kfc-hill-road-bandra-west",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Shop No. 5, Ground Floor, Next Times Square, CTS No.B/10 & B/11, Hill Road, Bandra (West),Mumbai, Greater Mumbai Ward-H/W, GreaterMumbai, Maharashtra-400052",
        "locality": "Hill Road",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
            {
                "type": "PROMOTED"
            }
        ],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 7500,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 7500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "7500",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6760089~p=10~eid=00000188-208b-1270-52fb-e51300b10a1e",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "6.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "418298",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 6.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "303850",
        "name": "JANATA TAWA AND",
        "uuid": "b80b70ef-954f-46a4-9d17-63516b03c9b6",
        "city": "5",
        "area": "Kurla West",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "zrusx2rcjtsxpksm4lne",
        "cuisines": [
            "Indian",
            "Chinese",
            "Tandoor"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
            "restaurant": "janata\ttawa\tand\tgrill-kurla-kurla",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "SHOP\tNO\t01\tAND\t02\tRASIWALA\tCHAWL\tNEAR\tSALMAN\tCHAMBER\tKURLA\tWEST MUMBAI\t400070\tGREATER\tMUMBAI,\tMAHARASHTRA\t400070",
        "locality": "Kurla",
        "parentId": 109562,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "303850",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 0.6000000238418579,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "32399",
        "name": "McDonald's",
        "uuid": "50a56a02-357f-4041-a250-478dc74a7868",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
            "restaurant": "mcdonalds-kalina-artista-scruz-bandra-east",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants Pvt Ltd, Sumit Artista, G-28, Vidya Nagari Rd, Mathuradas Colony, Kalina, Santacruz East, Mumbai, Maharashtra 400098.",
        "locality": "Kalina Artista",
        "parentId": 630,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1000",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "32399",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "695018",
        "name": "A1 Chinese Corner",
        "uuid": "8cd335d2-65dc-4fed-bd68-7ec8d098e644",
        "city": "5",
        "area": "Chembur",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "a60e77257e3cdb9b69c9fb9e71d6102f",
        "cuisines": [
            "Chinese",
            "Italian"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 6,
        "slugs": {
            "restaurant": "a1-chinese-corner-chembur-chembur",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "Deonar Rd, Patilwadi, Tata Nagar, Govandi East, Mumbai, Maharashtra 400043, India",
        "locality": "Tata Nagar",
        "parentId": 25070,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
            {
                "type": "PROMOTED"
            }
        ],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "distance",
                    "fee": 7500,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 7500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "7500",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6556477~p=13~eid=00000188-208b-1270-52fb-e51400b10d6b",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "695018",
            "deliveryTime": 43,
            "minDeliveryTime": 43,
            "maxDeliveryTime": 43,
            "lastMileTravel": 6,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "82668",
        "name": "The Belgian Waffle Co.",
        "uuid": "81a57548-8c03-4f5d-95e0-4f32a060fa60",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "gwfdgqjf5oymhegcvhvn",
        "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
            "restaurant": "the-belgian-waffle-co-kalina-scruz-bandra-east",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "No. 5, SUMIT ARTISTA, opp. AUDI SERVICE CENTER, Near BKC, KALINA, SANTACRUZ (E)Greater Mumbai, Maharashtra, 400059",
        "locality": "Kalina",
        "parentId": 2233,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3900,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "82668",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
}
]

// const RestaurantCard = (props) => {
const RestaurantCard = (props) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = props?.resData?.data;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/* will contain lot restro cards */}
                {
                    resList.map(resObject => <RestaurantCard
                        resData={resObject}
                    />)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* //will have all the components combined */}
            <HeaderComponent />
            <Body />
        </div>
    )
}

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />)