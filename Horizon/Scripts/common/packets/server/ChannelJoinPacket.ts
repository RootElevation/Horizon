import ServerPacket from "../ServerPackets";
import { PacketIdentifier, IChannelUser } from "../AbstractPacket";

@PacketIdentifier("JCH")
class ChannelJoinPacket extends ServerPacket
{
    channel: string;
    character: IChannelUser;
    title: string;
}

export { ChannelJoinPacket, ChannelJoinPacket as JCH };