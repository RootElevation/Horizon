import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("FLN")
class UserOfflinePacket extends ServerPacket
{
    character: string;
}

export { UserOfflinePacket, UserOfflinePacket as FLN };