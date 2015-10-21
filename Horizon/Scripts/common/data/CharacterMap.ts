import * as Rx from "rx";
import CharacterReference from "./CharacterReference";

export default class CharacterMap implements Map<string, CharacterReference> {
    private internal: Map<string, CharacterReference>;

    added: Rx.Subject<string>;
    removed: Rx.Subject<string>;

    constructor() {
        this.internal = new Map<string, CharacterReference>();
        this.added = new Rx.Subject<string>();
        this.removed = new Rx.Subject<string>();
    }

    clear(): void
    {
        // TODO: Not sure how to notify here.
        return this.internal.clear();
    }

    delete(key: string): boolean
    {
        let rv = this.internal.delete(key);
        this.size = this.internal.size;
        this.removed.onNext(key);
        return rv;
    }

    forEach(callbackfn: (value: CharacterReference, index: string, map: Map<string, CharacterReference>) => void, thisArg?): void {
        return this.internal.forEach(callbackfn);
    }

    get(key: string): CharacterReference {
        return this.internal.get(key);
    }

    has(key: string): boolean {
        return this.internal.has(key);
    }

    set(key: string, value?: CharacterReference): Map<string, CharacterReference>
    {
        if (!this.has(key)) {
            this.internal.set(key, value);
            this.added.onNext(key);
            this.size = this.internal.size;
        }

        return this;
    }

    entries(): IterableIteratorShim<[string, CharacterReference]> {
        return this.internal.entries();
    }

    keys(): IterableIteratorShim<string> {
        return this.internal.keys();
    }

    values(): IterableIteratorShim<CharacterReference> { throw new Error("Not implemented"); }

    size: number;
}