import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("TPN")
class UserTypingStatusPacket extends ServerPacket
{
    character: string;
    status: string;
}

export { UserTypingStatusPacket, UserTypingStatusPacket as TPN };