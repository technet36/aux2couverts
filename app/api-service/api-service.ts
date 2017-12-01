import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {

    private key: string = '3312c04b34aebdde5a1e322d74150b17';
    private apiUrl : string = 'https://developers.zomato.com/api/v2.1/';

    constructor(private http: HttpClient) {}

    search(location: string, tag:string): any {
        console.log(`apiService location:`+location+` tag:`+tag);

        // Make the HTTP request:
        this.http.header("user-key:3312c04b34aebdde5a1e322d74150b17").get(this.apiUrl+"/search/entity_id=280").subscribe(data => {
            // Read the result field from the JSON response.
            let results = data;
            console.log("Api response :");
            console.log(results);
        },
            // Errors will call this callback instead:
            err => {
                console.log('Something went wrong!');
            });
      return "tets";
    }
    searchTest():any{
        return {
            "results_found": 3225,
            "results_start": 0,
            "results_shown": 20,
            "restaurants": [
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9101083
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9101083",
                        "name": "My Meat Wagon",
                        "url": "https://www.zomato.com/dublin/my-meat-wagon-smithfield?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "Market Square, Smithfield, Dublin Dublin 7",
                            "locality": "Smithfield",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3489980000",
                            "longitude": "-6.2788120000",
                            "zipcode": "Dublin 7",
                            "country_id": 97,
                            "locality_verbose": "Smithfield, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "BBQ",
                        "average_cost_for_two": 35,
                        "price_range": 3,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9101083_RESTAURANT_9160d0b5ef8d79dd6f8f93dc3705d270_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.2",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "123"
                        },
                        "photos_url": "https://www.zomato.com/dublin/my-meat-wagon-smithfield/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/my-meat-wagon-smithfield/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9101083_RESTAURANT_9160d0b5ef8d79dd6f8f93dc3705d270_c.jpg?output-format=webp",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9101083",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/my-meat-wagon-smithfield/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16520426
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16520426",
                        "name": "Brother Hubbard",
                        "url": "https://www.zomato.com/dublin/brother-hubbard-north-city?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "153 Capel Street, Dublin 1",
                            "locality": "North City",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3470970000",
                            "longitude": "-6.2683820000",
                            "zipcode": "1",
                            "country_id": 97,
                            "locality_verbose": "North City, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Sandwich, Cafe, Healthy Food",
                        "average_cost_for_two": 60,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16520426_RESTAURANT_67118ac12384f8fb8b7706041f56d97e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.8",
                            "rating_text": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "151"
                        },
                        "photos_url": "https://www.zomato.com/dublin/brother-hubbard-north-city/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/brother-hubbard-north-city/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16520426_RESTAURANT_67118ac12384f8fb8b7706041f56d97e.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16520426",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/brother-hubbard-north-city/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9100193
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9100193",
                        "name": "San Lorenzo's",
                        "url": "https://www.zomato.com/dublin/san-lorenzos-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "South Great George's Street, Dublin Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3433780000",
                            "longitude": "-6.2646260000",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Italian",
                        "average_cost_for_two": 70,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9100193_RESTAURANT_10f692953276abc1bf49a836a5b9df88_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.6",
                            "rating_text": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "157"
                        },
                        "photos_url": "https://www.zomato.com/dublin/san-lorenzos-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/san-lorenzos-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9100193_RESTAURANT_10f692953276abc1bf49a836a5b9df88_c.jpg?output-format=webp",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9100193",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/san-lorenzos-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16509229
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16509229",
                        "name": "Whitefriar Grill",
                        "url": "https://www.zomato.com/Whitefriar-Grill-Steakhouse?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "16 Aungier Street, South City West, Dublin Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3403388889",
                            "longitude": "-6.2655361111",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Steak, BBQ",
                        "average_cost_for_two": 70,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16509229_RESTAURANT_8390111f9a1ac570d2b84ae33fd33e56.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.9",
                            "rating_text": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "167"
                        },
                        "photos_url": "https://www.zomato.com/Whitefriar-Grill-Steakhouse/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/Whitefriar-Grill-Steakhouse/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16509229_RESTAURANT_8390111f9a1ac570d2b84ae33fd33e56.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16509229",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/Whitefriar-Grill-Steakhouse/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9101437
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9101437",
                        "name": "Taco Taco",
                        "url": "https://www.zomato.com/dublin/taco-taco-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "14 Dame Court, South City West, Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3435720000",
                            "longitude": "-6.2639530000",
                            "zipcode": "2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Mexican",
                        "average_cost_for_two": 65,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9101437_RESTAURANT_a8f755d24fe5ba55ee22101980141db9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.5",
                            "rating_text": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "109"
                        },
                        "photos_url": "https://www.zomato.com/dublin/taco-taco-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/taco-taco-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9101437_RESTAURANT_a8f755d24fe5ba55ee22101980141db9.jpg?output-format=webp",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9101437",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/taco-taco-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9101221
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9101221",
                        "name": "Sophie's - The Dean Hotel",
                        "url": "https://www.zomato.com/dublin/sophies-the-dean-hotel-south-city-east?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "33 Harcourt Street, South City East, Dublin Dublin 2",
                            "locality": "The Dean Hotel, City Centre South",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3349410000",
                            "longitude": "-6.2635670000",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "The Dean Hotel, City Centre South, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Italian",
                        "average_cost_for_two": 65,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9101221_RESTAURANT_a3d14f5828d263bd1ddb6c454a425f34_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.2",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "109"
                        },
                        "photos_url": "https://www.zomato.com/dublin/sophies-the-dean-hotel-south-city-east/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/sophies-the-dean-hotel-south-city-east/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9101221_RESTAURANT_a3d14f5828d263bd1ddb6c454a425f34_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9101221",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/sophies-the-dean-hotel-south-city-east/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9101628
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9101628",
                        "name": "Wowburger",
                        "url": "https://www.zomato.com/dublin/wowburger-temple-bar?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "The Workmans Club, 11 Wellington Quay, Temple Bar, Dublin Dublin 2",
                            "locality": "The Workmans Club",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3452863158",
                            "longitude": "-6.2663815543",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "The Workmans Club, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Burger",
                        "average_cost_for_two": 20,
                        "price_range": 2,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9101628_RESTAURANT_f3b5336a7e2e26a4e537f38ac7dea68f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.7",
                            "rating_text": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "87"
                        },
                        "photos_url": "https://www.zomato.com/dublin/wowburger-temple-bar/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/wowburger-temple-bar/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9101628_RESTAURANT_f3b5336a7e2e26a4e537f38ac7dea68f.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9101628",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/wowburger-temple-bar/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16518534
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16518534",
                        "name": "Bunsen",
                        "url": "https://www.zomato.com/dublin/bunsen-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "36 Wexford Street, South City West, Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3371410000",
                            "longitude": "-6.2658840000",
                            "zipcode": "2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Burger",
                        "average_cost_for_two": 30,
                        "price_range": 3,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16518534_CHAIN_2496df898a20e6848015740554b58169_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.4",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "198"
                        },
                        "photos_url": "https://www.zomato.com/dublin/bunsen-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/bunsen-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16518534_CHAIN_2496df898a20e6848015740554b58169_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16518534",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/bunsen-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522172
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522172",
                        "name": "Fade Street Social",
                        "url": "https://www.zomato.com/dublin/fade-street-social-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "4-6 Fade Street, Off Drury Street, South City West, Dublin Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3418916667",
                            "longitude": "-6.2638222222",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Irish, Modern European",
                        "average_cost_for_two": 80,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "zomato_events": [
                            {
                                "event": {
                                    "event_id": 153021,
                                    "friendly_start_date": "12 September",
                                    "friendly_end_date": "31 December",
                                    "start_date": "2017-09-12",
                                    "end_date": "2017-12-31",
                                    "end_time": "23:00:00",
                                    "start_time": "16:00:00",
                                    "is_active": 1,
                                    "date_added": "2017-09-12 20:40:03",
                                    "photos": [
                                        {
                                            "photo": {
                                                "url": "https://b.zmtcdn.com/data/zomato_events/photos/7d2/acf07b5b18db103c5e8cf16cc2c247d2_1505229003.jpg",
                                                "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/7d2/acf07b5b18db103c5e8cf16cc2c247d2_1505229003.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                                "order": 0,
                                                "md5sum": "acf07b5b18db103c5e8cf16cc2c247d2",
                                                "photo_id": 228614,
                                                "uuid": 1505228999486383,
                                                "type": "NORMAL"
                                            }
                                        }
                                    ],
                                    "restaurants": [],
                                    "is_valid": 1,
                                    "share_url": "http://www.zoma.to/r/16522172",
                                    "title": "Dublin Christmas Party Restaurant 2017",
                                    "description": "Dublin Christmas Party Restaurant 2017\\r\\\r\http://www.fadestreetsocial.com/2017/09/dublin-christmas-party-restaurant-menus-2017/ \\r\\\r\Well, you have landed in the right place with Fade Street Social. With over 7 years experience now being a Dublin Christmas Party restaurant, we have the mechanics to ensure your function goes smoothly. We have our Gastro bar, main restaurant floor, upstairs cocktail lounge and of course the outdoor heated terrace bar. What more could you ask for! Delicious food, mouth watering cocktails, stylish surrounding & great atmosphere. Not forgetting of course the friendliest staff and most festive of cheer for your Christmas Party in Dublin. ",
                                    "display_time": "04:00 pm - 11:00 pm",
                                    "display_date": "12 September - 31 December",
                                    "is_end_time_set": 1,
                                    "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                                    "event_category": 0,
                                    "event_category_name": "",
                                    "book_link": ""
                                }
                            }
                        ],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522172_RESTAURANT_ed90c3250c4e0df593254fcea5b037c6_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.1",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "121"
                        },
                        "photos_url": "https://www.zomato.com/dublin/fade-street-social-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/fade-street-social-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522172_RESTAURANT_ed90c3250c4e0df593254fcea5b037c6_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522172",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/fade-street-social-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16518557
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16518557",
                        "name": "Opium",
                        "url": "https://www.zomato.com/dublin/opium-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "26 Wexford Street, South City West, Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3367000000",
                            "longitude": "-6.2658555556",
                            "zipcode": "2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Thai, Vietnamese, Asian",
                        "average_cost_for_two": 75,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16518557_RESTAURANT_4440bc0e13787ad8bd7e061de39b5190_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.1",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "91"
                        },
                        "photos_url": "https://www.zomato.com/dublin/opium-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/opium-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16518557_RESTAURANT_4440bc0e13787ad8bd7e061de39b5190_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16518557",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/opium-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16518294
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16518294",
                        "name": "Tribeca",
                        "url": "https://www.zomato.com/dublin/tribeca-ranelagh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "65 Ranelagh, Ranelagh, Dublin Dublin 6",
                            "locality": "Ranelagh",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3243420000",
                            "longitude": "-6.2530820000",
                            "zipcode": "Dublin 6",
                            "country_id": 97,
                            "locality_verbose": "Ranelagh, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Irish",
                        "average_cost_for_two": 50,
                        "price_range": 3,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16518294_RESTAURANT_49cc452db77bb1a396b1da9b3b74088c_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.1",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "141"
                        },
                        "photos_url": "https://www.zomato.com/dublin/tribeca-ranelagh/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/tribeca-ranelagh/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16518294_RESTAURANT_49cc452db77bb1a396b1da9b3b74088c_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16518294",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/tribeca-ranelagh/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522187
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522187",
                        "name": "The Market Bar",
                        "url": "https://www.zomato.com/dublin/the-market-bar-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "Fade Street, Off Drury Street, South City West, Dublin Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3420750000",
                            "longitude": "-6.2639800000",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Tapas",
                        "average_cost_for_two": 60,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522187_RESTAURANT_53a97e467356c6b0087bfce5594e939d_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.2",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "120"
                        },
                        "photos_url": "https://www.zomato.com/dublin/the-market-bar-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/the-market-bar-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522187_RESTAURANT_53a97e467356c6b0087bfce5594e939d_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522187",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/the-market-bar-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9100913
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9100913",
                        "name": "Elephant & Castle",
                        "url": "https://www.zomato.com/dublin/elephant-castle-temple-bar?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "18 Temple Bar, Temple Bar, Dublin Dublin 2",
                            "locality": "Temple Bar",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3457290000",
                            "longitude": "-6.2623750000",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "Temple Bar, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Modern European",
                        "average_cost_for_two": 70,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9100913_RESTAURANT_914e43ebf23f1d46e8895bff65c86270_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.3",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "143"
                        },
                        "photos_url": "https://www.zomato.com/dublin/elephant-castle-temple-bar/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/elephant-castle-temple-bar/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9100913_RESTAURANT_914e43ebf23f1d46e8895bff65c86270_c.jpg?output-format=webp",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9100913",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/elephant-castle-temple-bar/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522127
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522127",
                        "name": "Zaragoza",
                        "url": "https://www.zomato.com/dublin/zaragoza-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "17/18  South William Street, South City West, Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3420450518",
                            "longitude": "-6.2626328319",
                            "zipcode": "2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Tapas, Spanish, European",
                        "average_cost_for_two": 50,
                        "price_range": 3,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522127_RESTAURANT_eea75cee47ac0a07d0978ff11aac4e60_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.4",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "80"
                        },
                        "photos_url": "https://www.zomato.com/dublin/zaragoza-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/zaragoza-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522127_RESTAURANT_eea75cee47ac0a07d0978ff11aac4e60_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522127",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/zaragoza-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522177
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522177",
                        "name": "Stone at Rustic by Dylan McGrath",
                        "url": "https://www.zomato.com/dublin/stone-at-rustic-by-dylan-mcgrath-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "17  South George's Street, South City West, Dublin 2",
                            "locality": "Rustic Stone",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3429330000",
                            "longitude": "-6.2642210000",
                            "zipcode": "2",
                            "country_id": 97,
                            "locality_verbose": "Rustic Stone, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Steak, Modern European, Irish",
                        "average_cost_for_two": 80,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "zomato_events": [
                            {
                                "event": {
                                    "event_id": 153023,
                                    "friendly_start_date": "12 September",
                                    "friendly_end_date": "31 December",
                                    "start_date": "2017-09-12",
                                    "end_date": "2017-12-31",
                                    "end_time": "23:00:00",
                                    "start_time": "17:00:00",
                                    "is_active": 1,
                                    "date_added": "2017-09-12 20:43:32",
                                    "photos": [
                                        {
                                            "photo": {
                                                "url": "https://b.zmtcdn.com/data/zomato_events/photos/e4e/4905f01023a80cafa4fdc34b820dee4e_1505229212.jpg",
                                                "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/e4e/4905f01023a80cafa4fdc34b820dee4e_1505229212.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                                "order": 0,
                                                "md5sum": "4905f01023a80cafa4fdc34b820dee4e",
                                                "photo_id": 228616,
                                                "uuid": 1505229208986909,
                                                "type": "NORMAL"
                                            }
                                        }
                                    ],
                                    "restaurants": [],
                                    "is_valid": 1,
                                    "share_url": "http://www.zoma.to/r/16522177",
                                    "title": "Christmas Restaurant Dublin 2017",
                                    "description": "Christmas Restaurant Dublin 2017`\\r\\\r\http://www.rusticstone.ie/christmas-restaurant-dublin-2017.htm \\r\\\r\Rustic Stone is a perfect choice when looking for a Christmas Restaurant Dublin 2017. This year we have a Christmas Lunch and Christmas Dinner menu available which are available throughout diffeent times of the week.\\r\\\r\With over 170 seats set out over 4 floors, you no longer have to search the internet to find your perfect Christmas Party Venue. We have a full bar, festive decorations, mouth watering food, wide selection of wines and of course the cocktails! Check out our Christmas Restaurant Dublin Party Menu below and email info@rusticstone.ie to enquire about availability.",
                                    "display_time": "05:00 pm - 11:00 pm",
                                    "display_date": "12 September - 31 December",
                                    "is_end_time_set": 1,
                                    "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                                    "event_category": 0,
                                    "event_category_name": "",
                                    "book_link": ""
                                }
                            }
                        ],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522177_RESTAURANT_256671b9d55f81e5321f62c37bdf9b2d_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.2",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "116"
                        },
                        "photos_url": "https://www.zomato.com/dublin/stone-at-rustic-by-dylan-mcgrath-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/stone-at-rustic-by-dylan-mcgrath-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522177_RESTAURANT_256671b9d55f81e5321f62c37bdf9b2d_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522177",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/stone-at-rustic-by-dylan-mcgrath-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522373
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522373",
                        "name": "Pitt Bros",
                        "url": "https://www.zomato.com/dublin/pitt-bros-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "Unit 1 Wicklow House, Georges Street, Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3436500000",
                            "longitude": "-6.2646560000",
                            "zipcode": "2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "BBQ, American",
                        "average_cost_for_two": 40,
                        "price_range": 3,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522373_RESTAURANT_82c544de800f9150eb5cf0b38cd55cb5_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "3.9",
                            "rating_text": "Good",
                            "rating_color": "9ACD32",
                            "votes": "135"
                        },
                        "photos_url": "https://www.zomato.com/dublin/pitt-bros-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/pitt-bros-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522373_RESTAURANT_82c544de800f9150eb5cf0b38cd55cb5_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522373",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/pitt-bros-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522250
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522250",
                        "name": "Pygmalion",
                        "url": "https://www.zomato.com/dublin/pygmalion-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "Ground Floor, Powerscourt Centre, South William Street, South City West, Dublin Dublin 2",
                            "locality": "Powerscourt Centre, City Centre South",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3421135106",
                            "longitude": "-6.2621718273",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "Powerscourt Centre, City Centre South, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Tapas, Spanish",
                        "average_cost_for_two": 55,
                        "price_range": 3,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522250_RESTAURANT_0c3100c9c4615c84fc07e08e281565f4_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.1",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "80"
                        },
                        "photos_url": "https://www.zomato.com/dublin/pygmalion-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/pygmalion-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522250_RESTAURANT_0c3100c9c4615c84fc07e08e281565f4_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522250",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/pygmalion-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9100154
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9100154",
                        "name": "Brasserie Sixty6",
                        "url": "https://www.zomato.com/dublin/brasserie-sixty6-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "67 South Great George&#039;s Street, Dublin, South City West, Dublin Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3425027778",
                            "longitude": "-6.2644222222",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "French, European, Seafood",
                        "average_cost_for_two": 80,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "zomato_events": [
                            {
                                "event": {
                                    "event_id": 153010,
                                    "friendly_start_date": "01 October",
                                    "friendly_end_date": "31 December",
                                    "start_date": "2017-10-01",
                                    "end_date": "2017-12-31",
                                    "end_time": "22:00:00",
                                    "start_time": "00:00:00",
                                    "is_active": 1,
                                    "date_added": "2017-09-12 20:15:37",
                                    "photos": [
                                        {
                                            "photo": {
                                                "url": "https://b.zmtcdn.com/data/zomato_events/photos/72e/4832da040d3d1f609c6cb844fd65772e_1505227537.jpg",
                                                "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/72e/4832da040d3d1f609c6cb844fd65772e_1505227537.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                                "order": 0,
                                                "md5sum": "4832da040d3d1f609c6cb844fd65772e",
                                                "photo_id": 228611,
                                                "uuid": 1505227523332818,
                                                "type": "NORMAL"
                                            }
                                        }
                                    ],
                                    "restaurants": [],
                                    "is_valid": 1,
                                    "share_url": "http://www.zoma.to/r/9100154",
                                    "title": "Christmas Party Venue Dublin 2017",
                                    "description": "Christmas Party Venue Dublin 2017\\r\\\r\This Christmas why not book your party in a restaurant that is fully suitable for groups and is also famous for its great atmosphere.\\r\\\r\Over 230 seats, spiced mulled wine smell fills the rooms, garlands and lights garnish every nook and cranny, seasonal and festive menus and christmas cheer throughout.\\r\\\r\Look no further than Brasserie Sixty6 for your Christmas Party Venue Dublin 2017\\r\\\r\http://www.brasseriesixty6.com/christmas_party_venue_dublin_2017/ ",
                                    "display_time": "12:00 am - 10:00 pm",
                                    "display_date": "01 October - 31 December",
                                    "is_end_time_set": 1,
                                    "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                                    "event_category": 0,
                                    "event_category_name": "",
                                    "book_link": ""
                                }
                            }
                        ],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9100154_RESTAURANT_24c02a10522029dc8fc23b4ba9d6a641_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.1",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "99"
                        },
                        "photos_url": "https://www.zomato.com/dublin/brasserie-sixty6-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/brasserie-sixty6-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9100154_RESTAURANT_24c02a10522029dc8fc23b4ba9d6a641_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9100154",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/brasserie-sixty6-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 9100560
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "9100560",
                        "name": "Boojum",
                        "url": "https://www.zomato.com/dublin/boojum-north-city?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "Millenium Walkway, Dublin Dublin 1",
                            "locality": "North City",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3473166667",
                            "longitude": "-6.2655250000",
                            "zipcode": "Dublin 1",
                            "country_id": 97,
                            "locality_verbose": "North City, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Mexican",
                        "average_cost_for_two": 20,
                        "price_range": 2,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/9100560_CHAIN_1db4137ab10427fd625b1fe7afc255e2_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.6",
                            "rating_text": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "156"
                        },
                        "photos_url": "https://www.zomato.com/dublin/boojum-north-city/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/boojum-north-city/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/9100560_CHAIN_1db4137ab10427fd625b1fe7afc255e2_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/9100560",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/boojum-north-city/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                },
                {
                    "restaurant": {
                        "R": {
                            "res_id": 16522443
                        },
                        "apikey": "3312c04b34aebdde5a1e322d74150b17",
                        "id": "16522443",
                        "name": "777",
                        "url": "https://www.zomato.com/dublin/-south-city-west?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "location": {
                            "address": "7 Castle House, South Great Georges Street, Dublin Dublin 2",
                            "locality": "South City West",
                            "city": "Dublin",
                            "city_id": 91,
                            "latitude": "53.3431166667",
                            "longitude": "-6.2644611111",
                            "zipcode": "Dublin 2",
                            "country_id": 97,
                            "locality_verbose": "South City West, Dublin"
                        },
                        "switch_to_order_menu": 0,
                        "cuisines": "Mexican",
                        "average_cost_for_two": 70,
                        "price_range": 4,
                        "currency": "€",
                        "offers": [],
                        "thumb": "https://b.zmtcdn.com/data/res_imagery/16522443_RESTAURANT_feb55f253c99444a3454058d6a123f33_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "user_rating": {
                            "aggregate_rating": "4.3",
                            "rating_text": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "100"
                        },
                        "photos_url": "https://www.zomato.com/dublin/-south-city-west/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                        "menu_url": "https://www.zomato.com/dublin/-south-city-west/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                        "featured_image": "https://b.zmtcdn.com/data/res_imagery/16522443_RESTAURANT_feb55f253c99444a3454058d6a123f33_c.jpg",
                        "has_online_delivery": 0,
                        "is_delivering_now": 0,
                        "deeplink": "zomato://restaurant/16522443",
                        "has_table_booking": 0,
                        "events_url": "https://www.zomato.com/dublin/-south-city-west/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                        "establishment_types": []
                    }
                }
            ]
        };
    }
}
