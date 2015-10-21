import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CSO")
class ChannelSetOwnerPacket extends ServerPacket
{
    character: string;
    channel: string;
}

export { ChannelSetOwnerPacket, ChannelSetOwnerPacket as CSO };