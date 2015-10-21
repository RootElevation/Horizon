import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("IDN")
class IdentificationPacket extends ServerPacket
{
    character: string;
}

export { IdentificationPacket, IdentificationPacket as IDN };