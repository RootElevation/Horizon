import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("MSG")
class ChannelMessagePacket extends ServerPacket
{
    character: string;
    message: string;
    channel: string;
}

export { ChannelMessagePacket, ChannelMessagePacket as MSG };