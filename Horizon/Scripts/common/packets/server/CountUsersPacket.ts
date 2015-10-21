import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("CON")
class CountUsersPacket extends ServerPacket
{
    count: number;
}

export { CountUsersPacket, CountUsersPacket as CON };