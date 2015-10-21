import {EventEmitter} from "events";
import FListContext from "./FListContext";
import CharacterMap from "../common/data/CharacterMap";

class FChatContext extends EventEmitter
{
    private parent: FListContext;
    private characterMap: CharacterMap;

    constructor(parent: FListContext) {
        super();
        this.parent = parent;
        this.characters = new CharacterMap();
    }

    get characters(): CharacterMap {
        return this.characterMap;
    }
}

export default FChatContext;
export { FChatContext };