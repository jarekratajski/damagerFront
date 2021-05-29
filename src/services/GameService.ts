import {Command, GameObject, GameView, OwnPlayerView, PlayerView} from "../data/Model";

export class GameService {

    getView(): Promise<GameView> {
        return fetch("/api/game/admin/view").then( response => response.json())
            .then ((view:GameView) => {console.log(JSON.stringify(view)); return view;})
    }



    registerPlayer(name:string) : Promise<OwnPlayerView> {
        return fetch("/api/game/player?name=" + name, {method:"POST"}).then( response => response.json())
            .then ((view:OwnPlayerView) => {console.log(JSON.stringify(view)); return view;})
    }

    getObjects(token:string):Promise<Array<GameObject>> {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set("Token", token);

        return fetch("/api/game/objects", {headers:requestHeaders}).then( response => response.json())
            .then ((view:Array<GameObject>) => {console.log(JSON.stringify(view)); return view;})
    }

    getPlayerView(token:string) : Promise<OwnPlayerView> {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set("Token", token);

        return fetch("/api/game/player", {headers:requestHeaders}).then( response => response.json())
            .then ((view:OwnPlayerView) => {console.log(JSON.stringify(view)); return view;})
    }

    postCommand(token:string,command:Command) : Promise<Boolean> {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set("Token", token);
        requestHeaders.set("Content-Type", "application/json");
        return fetch("/api/game/player/command", {
            method:"POST",
            headers:requestHeaders,
            body: JSON.stringify(command)
            }).then( response => response.json())
            .then ((view:Boolean) => {console.log(JSON.stringify(view)); return view;})
    }
}

