import {GameView} from "../data/Model";

export class GameService {

    getView() {
        fetch("/api/game/admin/view").then( response => response.json())
            .then ((view:GameView) => console.log(JSON.stringify(view)));

    }

}
