import { Box } from '../models/box';

export class Board {
    rows:number;
    columns: number;
    levels: number;
    box_width: number;
    default_box_bg_color: string;
    default_text_color : string;
    boxes : Box[];
  }