import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CTU")
class ChannelTimeoutPacket extends ServerPacket
{
    operator: string;
    channel: string;
    length: number;
    character: string;
}

export { ChannelTimeoutPacket, ChannelTimeoutPacket as CTU };