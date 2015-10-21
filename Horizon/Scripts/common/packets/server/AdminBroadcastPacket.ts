import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("BRO")
class AdminBroadcastPacket extends ServerPacket
{
    message: string;
}

export { AdminBroadcastPacket, AdminBroadcastPacket as BRO };