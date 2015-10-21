import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("COR")
class ChannelDemoteOperatorPacket extends ServerPacket
{
    character: string;
    channel: string;
}

export { ChannelDemoteOperatorPacket, ChannelDemoteOperatorPacket as COR };