import {FunctionComponent, useEffect, useState} from "react";
import {Command, GameProps} from "../data/Model";
import {RegisterPlayer} from "./RegisterPlayer";

const PlayerView : FunctionComponent<GameProps> = props => {
    const player = props.state?.player;


    function move(direction:string) {
        const cmd:Command = {"@type": "MoveCommand", direction:direction.toUpperCase()};
        props.service.postCommand(player?.token, cmd);
    }

    function onKeyMove(key:string) {
        if (key == "ArrowUp") {
            move("up");
        }
        if (key == "ArrowLeft") {
            move("left");
        }
        if (key == "ArrowDown") {
            move("down");
        }
        if (key == "ArrowRight") {
            move("right");
        }
    }
    const alive = player?.gameObject.alive;
    const playerState = alive ? "" : "(Dead)";

    return <div className={"playerView"} tabIndex={-1} onKeyDown={e => onKeyMove(e.key)}>
        <h3>{player?.name} {playerState}</h3>

        <ul>
            <li>s: {player?.gameObject.effectiveStats.strength}</li>
            <li>d: {player?.gameObject.effectiveStats.dexterity}</li>
            <li>h: {player?.gameObject.effectiveStats.health}</li>
            <li>l: {player?.gameObject.effectiveStats.life}</li>
        </ul>
        <div className={"controls"}>
            <button className = {"up"} onClick={_=>move("up")} disabled={!alive}>up</button>
            <button className = {"left"} onClick={_=>move("left")} disabled={!alive}>left</button>
            <button className = {"right"} onClick={_=>move("right")} disabled={!alive}>right</button>
            <button  className = {"down"} onClick={_=>move("down")} disabled={!alive}>down</button>

        </div>
    </div>;
};

export const PlayerController: FunctionComponent<GameProps> = props => {
    const player = props.state?.player;
    const playerPart = player ? <PlayerView {...props}/> : <RegisterPlayer {...props}/>;

    return <div className={"player"}>
        {playerPart}
    </div>;
}