import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("HLO")
class HelloPacket extends ServerPacket
{
    message: string;
}

export { HelloPacket, HelloPacket as HLO };