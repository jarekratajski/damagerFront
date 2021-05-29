import {FunctionComponent, useState} from "react";
import {GameProps} from "../data/Model";
import {GameService} from "../services/GameService";
import {updateGameWithOwnPlayer} from "../data/ModelManipulation";

export const RegisterPlayer: FunctionComponent<GameProps> = props => {

    const [wantedName, setWantedName] = useState("");

    function register() {
        props.service.registerPlayer(wantedName).then(playerView =>
            props.setState( updateGameWithOwnPlayer(props.state, playerView))
        );
    }

    return <div className ={"newPlayer"}>
        <form>
            <input type={"text"} value={wantedName} onChange={event => setWantedName(event.currentTarget.value)}/>
        </form>
        <button onClick={_ => register()}>register player</button>
    </div>;
}
