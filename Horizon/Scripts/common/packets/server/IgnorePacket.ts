import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("IGN")
class IgnorePacket extends ServerPacket
{
    action: string;
    characters: string[];
    character: string;
}

export { IgnorePacket, IgnorePacket as IGN };