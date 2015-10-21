import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("STA")
class UserStatusPacket extends ServerPacket
{
    status: string;
    character: string;
    statusmsg: string;
}

export { UserStatusPacket, UserStatusPacket as STA };