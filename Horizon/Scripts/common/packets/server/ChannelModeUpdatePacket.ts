import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("RMO")
class ChannelModeUpdatePacket extends ServerPacket
{
    mode: string;
    channel: string;
}

export { ChannelModeUpdatePacket, ChannelModeUpdatePacket as RMO };