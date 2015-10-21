import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("FRL")
class FriendListPacket extends ServerPacket
{
    characters: string[];
}

export { FriendListPacket, FriendListPacket as FRL };