import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("LRP")
class AdPacket extends ServerPacket
{
    channel: string;
    message: string;
    character: string;
}

export { AdPacket, AdPacket as LRP };