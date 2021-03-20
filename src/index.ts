export default class EventEmitter {
    listeners: Map<string, Set<Function | undefined>>;

    constructor() {
        this.listeners = new Map();
    }

    /**
     * Emit an event with a given payload
     */
    emit(eventName: string, ...eventPayload: any[]): this {
        this.listeners.get(eventName)?.forEach((eventListener) => {
            eventListener.apply(null, eventPayload)
        })

        return this;
    }

    /**
     * Attach an event listener
     */
    on(eventName: string, eventListener: Function): this {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, new Set());
        }
        this.listeners.get(eventName).add(eventListener);

        return this;
    }

    /**
     * Attach an event listener that will be triggered only once
     */
    once(eventName: string, eventListener: Function): this {
        const once = (...args) => {
            eventListener.apply(null, args)
            this.off(eventName, once);
        }

        return this.on(eventName, once);
    }

    /**
     * Detach an event listener if provided, all if not
     */
    off(eventName: string, eventListener?: Function): this {
        if (!eventListener) {
            this.listeners.delete(eventName);
        } else {
            this.listeners.get(eventName)?.delete(eventListener);
        }

        return this;
    }
}
