import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CKU")
class ChannelKickPacket extends ServerPacket
{
    operator: string;
    channel: string;
    character: string;
}

export { ChannelKickPacket, ChannelKickPacket as CKU };