
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

}

export interface GameView {
    readonly playfield: Maze;
    readonly objects: Array<GameObject>
}


export interface GameProps {
    readonly view: GameView
}
