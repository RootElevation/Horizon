import * as Rx from "rx";
import FChatContext from "../../context/FChatContext";
import { UserOnlinePacket, CharacterListPacket } from "../packets/ServerPackets";

class CharacterReference 
{
    private context: FChatContext;

    name: string;
    gender: string;
    status: string;
    statusMessage: string;

    constructor(context: FChatContext, name: string, gender: string, status: string, statusMessage = "") {
        this.context = context;
        this.name = name;
        this.gender = gender;
        this.status = status;
        this.statusMessage = statusMessage;
    }

    static createReferences(context: FChatContext, packet: CharacterListPacket): CharacterReference[] {
        let rv: CharacterReference[] = [];

        for (var values of packet.characters) {
            rv.push(CharacterReference.createReference(context, values));
        }

        return rv;
    }

    static createReference(context: FChatContext, parts: string[]): CharacterReference {
        if (parts.length === 3)
            return new CharacterReference(context, parts[0], parts[1], parts[2]);
        else if (parts.length === 4)
            return new CharacterReference(context, parts[0], parts[1], parts[2], parts[3]);
        else
            return null;
    }

    
}

export default CharacterReference;