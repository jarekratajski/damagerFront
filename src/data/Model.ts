import {GameService} from "../services/GameService";

export interface Cell {
    readonly doorUp: boolean;
    readonly doorDown: boolean;
    readonly doorLeft: boolean;
    readonly doorRight: boolean;
}

export interface MazeRow {
    readonly cells: Array<Cell>;
}

export interface Maze {
    readonly rows: Array<MazeRow>;
}

export interface GameObject {
    readonly location: Coord
    readonly name:string
    readonly effectiveStats?: StatsView

}

export interface GameView {
    readonly playfield: Maze;
    readonly objects: Array<GameObject>
}


export interface GameState {
    readonly view: GameView
    readonly player: OwnPlayerView
}


export interface GameProps {
    readonly state: GameState
    readonly setState: (g:GameState) => void;
    readonly service: GameService;
}

export interface Coord {
    readonly x:number
    readonly y:number
}

export interface PlayerView {
    readonly location: Coord
    readonly name: string
    readonly effectiveStats: StatsView,
    readonly alive: boolean
}
export interface OwnPlayerView {
    readonly name: string
    readonly token: string,
    readonly gameObject: PlayerView,
    readonly commands: Array<Command>
}

export interface StatsView {
    readonly strength: number
    readonly dexterity: number
    readonly health: number
    readonly life:number
}



export type MoveCommand = {
    "@type" : "MoveCommand",
    direction: string;
}

export type Command = MoveCommand
