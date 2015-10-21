import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("ADL")
class OperatorListPacket extends ServerPacket
{
    ops: string[];
}

export { OperatorListPacket, OperatorListPacket as ADL };