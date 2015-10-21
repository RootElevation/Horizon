import { EventEmitter } from "events";
import FChatContext from "./FChatContext";
import * as Rx from "rx";


class ChannelContext extends EventEmitter
{
    private parent: FChatContext;

    messages: Rx.Subject<ChannelMessage>;
    joins: Rx.Subject<string>;
    leaves: Rx.Subject<string>;

    constructor(parent: FChatContext) {
        super();
        this.parent = parent;
    }
}

interface ChannelMessage {
    context: ChannelContext;

}

export default ChannelContext;
export { ChannelContext }