import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CIU")
class ChannelInvitePacket extends ServerPacket
{
    sender: string;
    title: string;
    name: string;
}

export { ChannelInvitePacket, ChannelInvitePacket as CIU };