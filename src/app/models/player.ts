// goodies should not have to be set to a fixed number
export class Goody {
  quantity : number;
  description : string;
}

export class Player {
    id: string;
    status: string;
    location: string;
    color: string;
    track : string;
    resources : {
      money : number,
      credits : number,
      goodies : Goody[]
    }
  }