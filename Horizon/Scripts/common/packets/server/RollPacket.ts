import ServerPacket from "../ServerPackets";
import { PacketIdentifier } from "../AbstractPacket";

@PacketIdentifier("RLL")
class RollPacket extends ServerPacket
{
    channel: string;
    results: number[];
    type: string;
    message: string;
    rolls: string[];
    character: string;
    endresult: number;
}

export { RollPacket, RollPacket as RLL };