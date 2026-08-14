export type Leg={leg:string;from:string;to:string;dist:number;hdg:number;alt:number;wind:string;temp:number;road:string;fuel:number;eta:string;km:number;windSpeed:number;gust:number;precip:number;roadTemp:number;elev:number};
export type Plan={id:string;from:string;to:string;date:string;etd:string;eta:string;ete:string;dist:number;fuel:number;vehicle:string;legs:Leg[];hazards:string[]};
