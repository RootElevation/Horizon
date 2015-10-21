import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("PIN", "", true)
class PingPacket extends ServerPacket
{
    ops: string[];
}

export { PingPacket, PingPacket as PIN };