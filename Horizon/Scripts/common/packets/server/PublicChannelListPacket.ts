import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

interface IPublicChannel
{
    name: string;
    mode: string;
    characters: number;
}

@PacketIdentifier("CHA")
class PublicChannelListPacket extends ServerPacket
{
    channels: IPublicChannel[];
}

export { PublicChannelListPacket, PublicChannelListPacket as CHA, IPublicChannel };