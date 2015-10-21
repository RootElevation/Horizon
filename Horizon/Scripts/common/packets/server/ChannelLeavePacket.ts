import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("LCH")
class ChannelLeavePacket extends ServerPacket
{
    channel: string;
    character: string;
}

export { ChannelLeavePacket, ChannelLeavePacket as LCH };