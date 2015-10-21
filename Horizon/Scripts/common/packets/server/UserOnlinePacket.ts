import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("NLN")
class UserOnlinePacket extends ServerPacket
{
    identity: string;
    gender: string;
    status: string;
}

export { UserOnlinePacket, UserOnlinePacket as NLN };