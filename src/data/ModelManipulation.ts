import {GameObject, GameState, OwnPlayerView, PlayerView} from "./Model";

export function updateGameWithOwnPlayer(state: GameState, player: OwnPlayerView): GameState {
    return Object.assign({}, state, {player: player})
}

// export function updatePlayerView(state: GameState, player: PlayerView): GameState {
//     const newPlayer = updateOwnPlayerView(state.player, player);
//     return Object.assign({}, state, {player: newPlayer})
// }

export function updateOwnPlayerView(player: OwnPlayerView, playerView: PlayerView): OwnPlayerView {
    return Object.assign({}, player, {gameObject: playerView})
}


export function updateObjects(state:GameState, objects: Array<GameObject>) : GameState {
    const oldView = state.view;
    const newView = Object.assign({}, oldView, {objects:objects});
    return Object.assign({}, state, {view: newView});
}
