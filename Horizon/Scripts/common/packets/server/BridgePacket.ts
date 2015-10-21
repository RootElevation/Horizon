import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("RTB")
class BridgePacket extends ServerPacket
{
    type: string;
    character: string;
}

export { BridgePacket, BridgePacket as RTB };