import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("COA")
class ChannelPromoteOperatorPacket extends ServerPacket
{
    character: string;
    channel: string;
}

export { ChannelPromoteOperatorPacket, ChannelPromoteOperatorPacket as COA };