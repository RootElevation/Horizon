import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CBU")
class ChannelBanPacket extends ServerPacket
{
    operator: string;
    channel: string;
    character: string;
}

export { ChannelBanPacket, ChannelBanPacket as CBU };