import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("KID")
class KID extends ServerPacket
{
    type: string;
    message: string;
    key: number[];
    value: number[];
}

export { KID };