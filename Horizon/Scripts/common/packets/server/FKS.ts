import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("FKS")
class FKS extends ServerPacket
{
    characters: string[];
    kinks: string[];
}

export { FKS };