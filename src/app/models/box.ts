export class Box {
    id: string;
    status: string;
    visibility: string;
    gridArea: string;
    color: string;
    bgColor: string;
    next: string;
    prior: string;
    offsetTop : number;
    offsetLeft : number;
    offsetWidth : number;
    offsetHeight : number;
    resources : {
      money: number,
      credits : number,
      goody : string
    }
  }