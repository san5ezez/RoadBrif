import {Plan} from './types';
export const demoPlan:Plan={id:'demo-pavlodar-astana',from:'PAVLODAR',to:'ASTANA',date:'14 AUG 2026',etd:'15:00',eta:'20:12',ete:'05:12',dist:428,fuel:38.8,vehicle:'BMW 320d',hazards:['STRONG CROSSWIND NEAR KARAGANDA','RAIN NEAR ASTANA'],legs:[
{leg:'01',from:'PAVLODAR',to:'EKIBASTUZ',dist:145,hdg:82,alt:142,wind:'290/09G14',temp:24,road:'DRY',fuel:9.4,eta:'16:38',km:0,windSpeed:9,gust:14,precip:5,roadTemp:31,elev:142},
{leg:'02',from:'EKIBASTUZ',to:'KARAGANDA',dist:190,hdg:247,alt:546,wind:'310/14G22',temp:21,road:'DRY',fuel:17.2,eta:'18:52',km:145,windSpeed:14,gust:22,precip:15,roadTemp:27,elev:546},
{leg:'03',from:'KARAGANDA',to:'ASTANA',dist:93,hdg:341,alt:347,wind:'270/11G18',temp:18,road:'WET',fuel:11.2,eta:'20:12',km:335,windSpeed:11,gust:18,precip:62,roadTemp:19,elev:347}]};
export const stations=[{name:'Qazaq Oil',km:72,fuel:'Diesel',remain:52,refuel:0},{name:'Helios Karaganda',km:287,fuel:'Diesel',remain:17.4,refuel:35}];
