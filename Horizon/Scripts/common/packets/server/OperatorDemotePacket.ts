import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("DOP")
class OperatorDemotePacket extends ServerPacket
{
    character: string;
}

export { OperatorDemotePacket, OperatorDemotePacket as DOP };