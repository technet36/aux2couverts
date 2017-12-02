import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

export class Resto {
    constructor(
        public id: number,
        public name: string,
        public lat: number,
        public long: number,
        public address: string,
        public city: string,
        public tag: Array<string>,
        public menu: Array<string>,
        public averagePrice: number,
        public averageScore: number) {}
}

@Injectable()
export class RestoService {

  private header:HttpHeaders = new HttpHeaders("user-key:3312c04b34aebdde5a1e322d74150b17");
  private apiBase:string ="https://developers.zomato.com/api/v2.1/";

  constructor(private http:HttpClient){ }

  getRestaurants(): Array<Resto> {
        var restos: Array<Resto> = [
          new Resto(
            0,
            "Nancy Hands Bar & Restaurant",
            53.348,
            -6.294,
            "30 - 32 Parkgate St, Dublin 8, Co. Dublin, Ireland, Arran Quay",
            "Dublin",
            ["Irish","Gastropub"],
            ["** Entrance ** \n Tomato\n** Dish **\n Beef with Fries\n** Desert **\n Banoffe\n","** Entrance ** \n Salad\n** Dish **\n Pork with Fries\n** Desert **\n Yogurt\n"],
            20.2,
            4.1),
          new Resto(
            1,
            "Thai Garden Restaurant",
            53.385,
            -6.374,
            "Church Ave, Blanchardstown",
            "Dublin",
            ["Classic"],
            ["** Entrance ** \n Soup\n** Dish **\n Beans\n** Desert **\n Banoffe\n","** Entrance ** \n Salad\n** Dish **\n Pork with Fries\n** Desert **\n Yogurt\n"],
            25.2,
            4.6),
          new Resto(
            2,
            "Liberty Grill",
            51.897,
            -8.478,
            "32 Washington St, Centre",
            "Cork",
            ["Classic"],
            ["** Entrance ** \n Soup\n** Dish **\n Beans\n** Desert **\n Banoffe\n","** Entrance ** \n Salad\n** Dish **\n Pork with Fries\n** Desert **\n Yogurt\n"],
            15.2,
            4.6),

        ];
        return restos;
    }

  public getRestos(cityQuery:string,tagId:number):Observable<Resto[]>{

    return new Observable((observer)=>{
    this.http.get(this.apiBase+"locations?query="+cityQuery,{headers:this.header}).subscribe(
      value=>{
        let cityId = value["location_suggestions"][0]["city_id"];
        this.http.get(this.apiBase+"search?entity_id="+cityId+"&entity_type=city&cuisines="+tagId,{headers:this.header}).subscribe(
          values=>{
            let restos:Array<Resto>=[];
            values["restaurants"].forEach(function (unResto) {
              restos.push(new Resto(
                unResto["restaurant"]["R"]["res_id"],
                unResto["restaurant"]["name"],
                parseFloat(unResto["restaurant"]["location"]["latitude"]),
                parseFloat(unResto["restaurant"]["location"]["longitude"]),
                unResto["restaurant"]["location"]["address"],
                unResto["restaurant"]["location"]["city"],
                unResto["restaurant"]["cuisines"].split(", "),
                [unResto["restaurant"]["menu_url"]]  ,
                unResto["restaurant"]["average_cost_for_two"]/2,
                unResto["restaurant"]["user_rating"]["aggregate_rating"]));
            });

            observer.next(restos);
            observer.complete();
          },()=>{
            observer.error([]);
          }
        );
      },()=>{
        observer.error([]);
      }
    );
  });
  }

  getAllTags(a:number,b?:number):Observable<Object>{
      if(b){
        //return ["Classic","Irish"];
      }else{
        return this.http.get(this.apiBase+"cuisines?city_id=91",{headers:this.header});
      }
  }
  getRestosById(id: number): Resto {
    return this.getRestaurants()[id];
  }
}
