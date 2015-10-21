import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("UPT")
class UptimePacket extends ServerPacket
{
    time: number;
    starttime: number;
    startstring: string;
    accepted: number;
    channels: number;
    users: number;
    maxusers: number;
}

export { UptimePacket, UptimePacket as UPT };