import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CDS")
class ChannelDescriptionChangePacket extends ServerPacket
{
    channel: string;
    description: string;
}

export { ChannelDescriptionChangePacket, ChannelDescriptionChangePacket as CDS };