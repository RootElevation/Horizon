import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("PRD")
class PRD extends ServerPacket
{
    type: string;
    message: string;
    key: string;
    value: string;
}

export { PRD };