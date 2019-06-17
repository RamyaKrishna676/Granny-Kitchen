import { Restaurant } from "../class/restaurant";

import { Food } from "../class/food";


export const RESTAURANTS:Restaurant[] = 
[{

    id: 5001,

    name: 'A2B',

    manager: null,

    fassaiId: '23456789102345',

    gstNumber: '234567891023456',

    cuisine: ['South Indian','North Indian'],

    address: {

        addressLine1:null,

        street:'Electronic City  Phase 1',

        city: 'Bengalore',

        pincode: 560100,

        state:'Karnataka'

    },

    timings:'9.00am-10.00pm',

    reviewList:[],

    orderList:[],

    notification:null,
    imageUrl:'https://content3.jdmagicbox.com/comp/bangalore/i4/080pxx80.xx80.100814143813.w4i4/catalogue/a2b-adyar-ananda-bhavan-btm-layout-bangalore-south-indian-restaurants-is17w.jpg',
    averageRating:4.0,
    averagePrice:150,
    type:['veg','Non-Veg']

},

{
    id:5002,

    name: 'Udipi',

    manager: null,

    fassaiId: '23456789103456',

    gstNumber: '234567891034567',

    cuisine:['South Indian'],

    address:{

        addressLine1:null,

        street:'Electronic City Phase 2',

        city: 'Bengalore',

        pincode: 560100,

        state:'Karnataka'

    },

    timings:'9.00am-10.00pm',

    reviewList:[],

    orderList:[],

    notification:null,
    imageUrl:'https://media-cdn.tripadvisor.com/media/photo-s/05/52/aa/ef/udipi-cafe.jpg',
    averageRating:4.0,
    averagePrice:150,
    type:['veg','Non-Veg']

},

{

    id:5003,

    name: 'Sky Land Family Restaurent',

    manager: null,

    fassaiId: '23456789102345',

    gstNumber: '234567891023456',

    cuisine: ['South Indian'],

    address:{

        addressLine1:null,

        street:'Silk Board',

        city: 'Bengalore',

        pincode: 560100,

        state:'Karnataka'

    },

    timings:'9.00am-10.00pm',

    reviewList:[],

    orderList:[],

    notification:null,
    imageUrl:'https://mediaweb.wsoctv.com/photo/2019/06/14/Sequence_VA%20_AMP_nbsp_SEM_SCHT%20SKYLAND%20ROBBED_VALBRIGHT_0001_1560505740212.jpg_15575990_ver1.0_640_360.jpg',
    
    averageRating:4.0,
    
    averagePrice:150,
    
    type:['veg','Non-Veg'],

},
{
    id:5004,

    name: 'Green Land Pure Veg Family Restaurant',

    manager: null,

    fassaiId: '23456789103457',

    gstNumber: '234567891034568',

    cuisine:['South Indian','Chinese'],

    address:{

        addressLine1:null,

        street:'Electronic City Phase 2',

        city: 'Bengalore',

        pincode: 560100,

        state:'Karnataka'

    },

    timings:'9.00am-10.00pm',

    reviewList:[],

    orderList:[],

    notification:null,
    imageUrl:'https://photos.wikimapia.org/p/00/02/64/35/51_big.jpg',
    averageRating:4.0,
    averagePrice:150,
    type:['veg']

},
{
    id:5005,

    name: "Granny's Kitchen",

    manager: null,

    fassaiId: '23456789103459',

    gstNumber: '234567891034569',

    cuisine:['South Indian'],

    address:{

        addressLine1:null,

        street:'Electronic City Phase 2',

        city: 'Bengalore',

        pincode: 560100,

        state:'Karnataka'

    },

    timings:'9.00am-10.00pm',

    reviewList:[],

    orderList:[],

    notification:null,
    imageUrl:'https://d1d4fj96f6cmxm.cloudfront.net/restaurant-logos/57106/large-7e3be12065c9fa103f99aedee6de92a4.png?1452868376',
    averageRating:4.0,
    averagePrice:150,
    type:['veg','Non-Veg']

},
{
    id:5006,

    name: 'Village Restaurent',

    manager: null,

    fassaiId: '23456789103457',

    gstNumber: '234567891034568',

    cuisine:['South Indian','Chinese','North Indian'],

    address:{

        addressLine1:null,

        street:'Electronic City Phase 2',

        city: 'Bengalore',

        pincode: 560100,

        state:'Karnataka'

    },

    timings:'9.00am-10.00pm',

    reviewList:[],

    orderList:[],

    notification:null,
    imageUrl:'https://www.hammockstories.blog/wp-content/uploads/2018/03/045-1024x768.jpg',
    averageRating:4.8,
    averagePrice:100,
    type:['veg','Non-Veg']

}

]

export const FOODS:Food[] = [
{ id:9001,name:'Idly',price:48.00,tax:2.00,restaurantId:1001,availability:true,imageUrl:'/',
averageRating:4.5,description:"2 idly,sambar and chatiny",category:'Indian Breeds',cuisine:'South Indian'},
{id:9002,name:'Plain Dosa',price:48.00,tax:2.00,restaurantId:1001,availability:true,imageUrl:'/',
averageRating:4.0,description:"1 Dosa,sambar and chatiny",category:'Indian Breeds',cuisine:'South Indian'},
{id:9003,name:'Onion Dosa',price:58.00,tax:2.00,restaurantId:1001,availability:true,imageUrl:'/',
averageRating:4.5,description:"1 onion dosa,sambar and chatiny",category:'Indian Breeds',cuisine:'South Indian'},
{id:9004,name:'Pongal',price:38.00,tax:2.00,restaurantId:1001,availability:true,imageUrl:'/',
averageRating:4.5,description:"Pongal Rice,sambar and chatiny",category:'Rice',cuisine:'South Indian' },
{id:9005,name:'Poori',price:48.00,tax:2.00,restaurantId:1001,availability:true,imageUrl:'/',
averageRating:4.0,description:"2 Poori,Channa Masala",category:'Indian Breeds',cuisine:'South Indian' },
{id:9006,name:'Veg-Meal',price:80.00,tax:3.00,restaurantId:1001,availability:true,imageUrl:'D:\Angular\project1\src\assets\food\meal.jpg',averageRating:4.0,
description:"rice,dal,curd,fride curry",category:'Indian Meal',cuisine:'South Indian' },
{id:9007,name:'Chicken-Biryani',price:150.00,tax:4.00,restaurantId:1001,availability:true,imageUrl:'D:\Angular\project1\src\assets\food\meal.jpg',averageRating:4.0,
description:"rice,1piece,Kurma",category:'Indian Meal',cuisine:'South Indian' },

]