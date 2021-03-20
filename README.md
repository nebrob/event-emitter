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
    
    trigger(){
        this.emit('eventName', 'argument_1', 'argument_2', ...);
    }
}

const clazz = new MyClass();

clazz.on('eventName', (arg1, arg2) => {
    console.log(arg1, arg2) // Output: "arguement_1", "arguement_2"
})

clazz.trigger();
```

