import { Box } from '../models/box';

export class Board {
    rows:number;
    columns: number;
    levels: number;
    box_width: number;
    default_box_bg_color: string;
    default_text_color : string;
    origin : string;
    // Player display info
    maxPlayers : number;
    tracks : [{ id:string, topOffset : number, leftOffset: number}]
    // Original boxes
    boxes : Box[];
  }

