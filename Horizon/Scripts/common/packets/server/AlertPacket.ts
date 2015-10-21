import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("SFC")
class AlertPacket extends ServerPacket
{
    action: string;
    moderator: string;
    character: string;
    timestamp: string;

    report: string;
    callid: number;
    logid: number;
}

export { AlertPacket, AlertPacket as SFC };