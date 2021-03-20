![Workflow Passing](https://github.com/nebrob/event-emitter/actions/workflows/npm-publish.yml/badge.svg)

# Event Emitter

A tiny ES6 event emitter

## Install

* Using yarn `yarn add @nebrob/event-emitter`
* Using npm `npm i @nebrob/event-emitter`

## Usage

### Standalone

```javascript
import EventEmitter from "@nebrob/event-emitter";

const eventEmitter = new EventEmitter();

eventEmitter.on('eventName', (arg1, arg2) => {
    console.log(arg1, arg2) // Output: "arguement_1", "arguement_2"
})

eventEmitter.emit('eventName', 'arguement_1', 'argument_2', ...);
```

### Sub-class

```javascript
import EventEmitter from "@nebrob/event-emitter";

class MyClass extends EventEmitter {
    constructor() {
        super();
    }

    trigger() {
        this.emit('eventName', 'argument_1', 'argument_2', ...);
    }
}

const clazz = new MyClass();

clazz.on('eventName', (arg1, arg2) => {
    console.log(arg1, arg2) // Output: "arguement_1", "arguement_2"
})

clazz.trigger();
```

## Methods

All methods are available and documented in `dist/index.d.ts`

```typescript
export default class EventEmitter {
    listeners: Map<string, Set<Function | undefined>>;

    constructor();

    /**
     * Emit an event with a given payload
     */
    emit(eventName: string, ...eventPayload: any[]): this;

    /**
     * Attach an event listener
     */
    on(eventName: string, eventListener: Function): this;

    /**
     * Attach an event listener that will be triggered only once
     */
    once(eventName: string, eventListener: Function): this;

    /**
     * Detach an event listener if provided, all if not
     */
    off(eventName: string, eventListener?: Function): this;
}

```
