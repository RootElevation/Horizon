import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("PRI")
class UserMessagePacket extends ServerPacket
{
    character: string;
    message: string;
}

export { UserMessagePacket, UserMessagePacket as PRI };