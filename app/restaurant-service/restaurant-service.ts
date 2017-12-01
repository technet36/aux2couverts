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
        public averagePrice: number,
        public averageScore: number) {}
}

export class RestoService {
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
            [["Tomato","Beef with Fries","Banoffe"],["Salad","Pork with Fries","Yogurt"],["Salad","Pork with Fries","Yogurt"]],
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
            [["Soup","Beans","Banoffe"],["Salad","Pork with Fries","Yogurt"]],
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
            [["Soup","Beans","Banoffe"],["Salad","Pork with Fries","Yogurt"]],
            15.2,
            4.6),

        ];
        return restos;
    }

    getRestosById(id: number): Resto {
      return this.getRestaurants()[id];
    }
}
