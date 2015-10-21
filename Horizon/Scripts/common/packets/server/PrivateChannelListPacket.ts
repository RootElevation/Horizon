import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

interface IPrivateChannelData
{
    characters: number;
    title: string;
    name: string;
}

@PacketIdentifier("ORS")
class PrivateChannelListPacket extends ServerPacket
{
    channels: IPrivateChannelData[];
}

export { PrivateChannelListPacket, PrivateChannelListPacket as ORS, IPrivateChannelData};