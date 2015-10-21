import ServerPacket from "../ServerPackets";
import { PacketIdentifier, IChannelUser } from "../AbstractPacket";

@PacketIdentifier("ICH")
class ChannelInitialDataPacket extends ServerPacket
{
    users: IChannelUser[];
    channel: string;
    mode: string;
}

export { ChannelInitialDataPacket, ChannelInitialDataPacket as ICH };