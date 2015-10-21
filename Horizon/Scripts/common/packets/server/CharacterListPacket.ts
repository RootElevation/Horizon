import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("LIS")
class CharacterListPacket extends ServerPacket
{
    characters: string[][];
}

export { CharacterListPacket, CharacterListPacket as LIS };