// We need to store a bunch of information about where
// the game is so we have enough information to restart
// it.
export class GameStatus
{
    timestarted : Date;
    timepaused : Date;
    playorder : string[];  //Order of players play
    lastplayer: string;
    currentplayer : string;
}