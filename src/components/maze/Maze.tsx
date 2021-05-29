import React, {FunctionComponent, useEffect} from "react";
import {AppProps} from "../../data/AppProps";
import {Cell, GameObject, GameProps} from "../../data/Model";
import {setState} from "jest-circus/build/state";
import {updateObjects} from "../../data/ModelManipulation";

export const Maze: FunctionComponent<GameProps> = props => {
    const game = props.state
    const maze = game.view.playfield;


    function getObjectsInCell(x:number, y:number): GameObject[] {
        const toDisplay = props.state.view.objects.filter( obj => obj.location.x == x && obj.location.y == y);
        // const sorted = toDisplay.sort( (a,b)=>b.effectiveStats?.life - a.effectiveStats?.life);

        return toDisplay;
    }

    function walls(cell: Cell) {
        const up = (cell.doorUp) ? <div className={"door up"}/> : <div className={"wall up"}/>;
        const down = (cell.doorDown) ? <div className={"door down"}/> : <div className={"wall down"}/>;
        const left = (cell.doorLeft) ? <div className={"door left"}/> : <div className={"wall left"}/>;
        const right = (cell.doorRight) ? <div className={"door right"}/> : <div className={"wall right"}/>;
        return <React.Fragment>{up} {down} {left} {right} </React.Fragment>;
    }
    function state(obj:GameObject) :string{
        if (obj.effectiveStats?.life != undefined ) {
            if (obj.effectiveStats.life > 0 ) {
                return  "("+obj.effectiveStats.life.toString()+")";
            } else {
                return "(dead)";
            }

        } else {
            return "";
        }

    }
    return <div className={"maze"}>
        {
            maze.rows.map((row,y) =>
                <div className={"row"} key={y}>
                    {
                        row.cells.map((cell, x) => <
                            div className={"cell"} key={`${x} ${y}`}>
                            {
                                walls(cell)
                            }
                            <div className = {"objects"}>
                            {
                                getObjectsInCell(x, y).map (obj => <span>{obj.name} {state(obj)}</span>)
                            }
                            </div>
                        </div>)
                    }
                </div>
            )
        }
    </div>;
}


