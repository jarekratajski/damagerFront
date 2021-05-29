import React, {FunctionComponent} from 'react';
import {AppProps} from "../../data/AppProps";
import {GameService} from "../../services/GameService";

export const Debug: FunctionComponent<AppProps> = _ => {
    const service = new GameService();

    function refreshGame() {
        service.getView();
    }
    // function refreshPlayer() {
    //     service.getPlayerView();
    // }

    return <aside>
        <h2>Debug</h2>
        <p>
            <button onClick={_ => refreshGame()}>refresh view</button>
            {/*<button onClick={_ => refreshPlayer()}()}>refresh objects</button>*/}
        </p>
    </aside>;
}
