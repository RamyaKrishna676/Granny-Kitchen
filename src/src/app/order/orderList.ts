import { Order } from "../class/order";
import { Restaurant } from "../class/restaurant";

export const ORDERS:Order[] = [
    {
        id: 101,
        date:"22/2/2019",
        
        cart: {
            id:201,
            restaurant:new Restaurant(),
            foodQuantityList:[{
                food:{
                    id:401,
                    name: "Dosa",
                    price: 40,
                    tax: 0,
                    restaurantId: 1001,
                    category: ['Biryani','South Indian'],
                    availability: true,
                    imageUrl: "",
                    averageRating: 4,
                    description: "Nice Food",
                    cuisine: "South Indian",
                    type:"veg"
                },
                quantity: 1,
                totalPrice: 40,
            }],
            grandTotal: 250,
        },
        
        payment: null,
        deliveryPartner:null,
        userName: null,
        statusList: [],
        address: null,
        foodReview: null,
        issue: null,
        deliveryPartnerReview: null 

    },
    {
        id: 102,
        date:"25/3/2019",
        cart: {
            id:215,
            restaurant:new Restaurant(),
            foodQuantityList:[{
                food:{
                    id:402,
                    name: "Dosa",
                    price: 40,
                    tax: 0,
                    restaurantId: 1001,
                    category: ["Indian Breeds"],
                    availability: true,
                    imageUrl: "",
                    averageRating: 4,
                    description: "Nice Food",
                    cuisine: "South Indian",
                    type:"veg"
                },
                quantity: 1,
                totalPrice: 40,
            }],
            grandTotal: 250,
        },
        
        payment: null,
        deliveryPartner:null,
        userName: null,
        statusList: [],
        address: null,
        foodReview: null,
        issue: null,
        deliveryPartnerReview: null 

    }
]