export class Box {
    id: string;
    status: string;
    visibility: string;
    gridArea: string;
    color: string;
    bgColor: string;
    next: string;
    prior: string;
    resources : {
      money: number,
      credits : number,
      goody : string
    }
  }