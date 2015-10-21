import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("SYS")
class SystemPacket extends ServerPacket
{
    message: string;
    channel: string;
}

export { SystemPacket, SystemPacket as SYS };