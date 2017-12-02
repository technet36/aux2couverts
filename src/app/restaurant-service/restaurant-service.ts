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
        public menu: Array<Array<string>>,
        public menuUrl: string,
        public averagePrice: number,
        public averageScore: number) {}
}

@Injectable()
export class RestoService {


  private mesRestaurants:Array<Resto>;
  private header:HttpHeaders = new HttpHeaders("user-key:3312c04b34aebdde5a1e322d74150b17");
  private apiBase:string ="https://developers.zomato.com/api/v2.1/";

  constructor(private http:HttpClient){
    this.mesRestaurants=[];
  }

  getRestaurants(): Array<Resto> {
        var restos: Array<Resto> = [];
        return restos;
    }

  public getRestos(cityQuery:string,tagId:number):Observable<Resto[]>{

    return new Observable((observer)=>{
    this.http.get(this.apiBase+"locations?query="+cityQuery,{headers:this.header}).subscribe(
      value=>{
        let cityId = value["location_suggestions"][0]["city_id"];
        let urlString = this.apiBase;
        console.log("cityQuery :"+cityQuery+" || tagId:"+tagId);
        if(cityQuery!=="" && tagId!==0){}
        this.http.get(this.apiBase+"search?entity_id="+cityId+"&entity_type=city&cuisines="+tagId+"&sort=rating&order=desc",{headers:this.header}).subscribe(
          values=>{
            this.mesRestaurants=[];
            values["restaurants"].forEach(function (unResto) {
              this.mesRestaurants.push(new Resto(
                unResto["restaurant"]["R"]["res_id"],
                unResto["restaurant"]["name"],
                parseFloat(unResto["restaurant"]["location"]["latitude"]),
                parseFloat(unResto["restaurant"]["location"]["longitude"]),
                unResto["restaurant"]["location"]["address"],
                unResto["restaurant"]["location"]["city"],
                unResto["restaurant"]["cuisines"].split(", "),
                [["Soup","Beans","Banoffe"],["Salad","Pork with Fries","Yogurt"]] ,
                unResto["restaurant"]["menu_url"],
                unResto["restaurant"]["average_cost_for_two"]/2,
                unResto["restaurant"]["user_rating"]["aggregate_rating"]));
            },this);
            console.log(this.mesRestaurants);
            observer.next(this.mesRestaurants);
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
  getRestosById(id: number):Observable<Resto> {
    console.log("getResto");
    //console.log(this.mesRestaurants);

      return new Observable((monObserver)=>{
        this.http.get(this.apiBase+"restaurant?res_id=195",{headers:this.header}).subscribe(
        unResto=>{
          console.log("test");
          let leResto:Resto= new Resto(
              unResto["R"]["res_id"],
              unResto["name"],
              parseFloat(unResto["location"]["latitude"]),
              parseFloat(unResto["location"]["longitude"]),
              unResto["location"]["address"],
              unResto["location"]["city"],
              unResto["cuisines"].split(", "),
              [["Soup","Beans","Banoffe"],["Salad","Pork with Fries","Yogurt"]] ,
              unResto["menu_url"],
              unResto["average_cost_for_two"]/2,
              unResto["user_rating"]["aggregate_rating"]);
          console.log(leResto);
          monObserver.next(leResto);
          monObserver.complete();
        },()=>{
            monObserver.error([]);
        });
      });
  }
}
