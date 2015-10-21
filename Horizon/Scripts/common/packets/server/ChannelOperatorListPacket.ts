
import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("COL")
class ChannelOperatorListPacket extends ServerPacket
{
    channel: string;
    oplist: string[];
}

export { ChannelOperatorListPacket, ChannelOperatorListPacket as COL };