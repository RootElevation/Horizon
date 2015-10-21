import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("AOP")
class OperatorPromotionPacket extends ServerPacket
{
    character: string;
}

export { OperatorPromotionPacket, OperatorPromotionPacket as AOP };