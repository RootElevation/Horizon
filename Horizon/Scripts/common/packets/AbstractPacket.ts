var _ = require('lodash');

class PacketInformation
{
    headerOnly: boolean;
    constructFunction: <T extends AbstractPacket>(...args) => T;

    constructor(ho: boolean, construct: <T extends AbstractPacket>(...args) => T)
    {
        this.headerOnly = ho;
        this.constructFunction = construct;
    }
}

class AbstractPacket
{
    private static registeredPackets: Object = {};

    static createPacket<T extends AbstractPacket>(data: string): T
    {
        let id: string = data.substr(0, 3);

        if (_.has(this.registeredPackets, id))
        {
            let info: PacketInformation = this.registeredPackets[id];

            if (info.headerOnly)
            {
                return <T>info.constructFunction();
            } else
            {
                let rawObject = JSON.parse(data.substr(4));

                var rv: AbstractPacket = info.constructFunction();

                return _.assign(rv, rawObject);
            }

        } else
        {
            // TODO: Warning...
        }

        return null;
    }

    static registerPacket(key: string, information: PacketInformation)
    {
        if (_.has(this.registeredPackets, key))
        {
            // TODO: Throw Error.
        } else
        {
            this.registeredPackets[key] = information;
        }
    }
}

export interface IChannelUser
{
    identity: string;
}

/**
 * Packet Identification decorator that registers the annotated class with the packet factory at runtime.
 * 
 * @param identifier Three-letter identifier that the class is to be registered under.
 * @param description
 * @param headerOnly Does this packet have a body or not?
 */
// ReSharper disable once InconsistentNaming
function PacketIdentifier(identifier: string, description = "", headerOnly = false): (target: any) => any
{
    return (target: any) =>
    {
        // save a reference to the original constructor
        var original = target;

        // a utility function to generate instances of a class
        function construct(constructor, args)
        {
            var c: any = function ()
            {
                return constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            return new c();
        }

        // the new constructor behaviour
        var createObjectFunction: any = (...args) => construct(original, args);

        AbstractPacket.registerPacket(identifier, new PacketInformation(headerOnly, createObjectFunction));

        // copy prototype so intanceof operator still works
        createObjectFunction.prototype = original.prototype;

        // return new constructor (will override original)
        return createObjectFunction;
    }
}

export default AbstractPacket;
export { AbstractPacket, PacketIdentifier };

// In order for the decorator to run and static-initialize AbstractPacket these must be imported
export * from "./ServerPackets";