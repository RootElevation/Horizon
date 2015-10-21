import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("ERR")
class ErrorPacket extends ServerPacket
{
    message: string;
    number: number;
}

export { ErrorPacket, ErrorPacket as ERR };