import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("VAR")
class VariablePacket extends ServerPacket
{
    variable: string;
    value: number | string[];
}

export { VariablePacket, VariablePacket as VAR };