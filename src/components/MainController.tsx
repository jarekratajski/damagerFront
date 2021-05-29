import {FunctionComponent, useEffect, useState} from "react";
import {GameProps, GameState} from "../data/Model";
import {GameService} from "../services/GameService";
import {Maze} from "./maze/Maze";
import {PlayerController} from "./Player";
import {updateGameWithOwnPlayer, updateObjects} from "../data/ModelManipulation";

export const MainController: FunctionComponent<any> = _ => {
    const service = new GameService();

    const [state, setState]  = useState({} as GameState);

    const props :GameProps= {state:state, setState:setState, service:service};

    function refreshAll() {
        if (state?.player) {
            service.getPlayerView(props.state.player.token).then(playerView =>
                service.getObjects(props.state.player.token).then(objects => {
                    const newState = updateObjects(updateGameWithOwnPlayer(state, playerView),objects)
                        setState(newState)
                    }
                )
            );
        } else {
            console.log("player null still ");
        }
    }

    useEffect(() => {
        service.getView().then(gameView => {
            const newState = Object.assign({}, state,{view:gameView});
            setState(newState)
        });
    },[]);

    useEffect(() => {
        const interval = setInterval(()=> {
            console.log("refreshing");
            refreshAll();
        }, 2000);
        return () => clearInterval(interval);
    },[state.player]);


    const maze = state?.view?.playfield ? <Maze {...props}></Maze> : <div>empty</div>
    
    return <div className={"main"}> {
        maze
    }
    <PlayerController {...props}/>
    </div>;
};


