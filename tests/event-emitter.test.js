const EventEmitter = require("../dist");

test('Emit an event', () => {
    const eventEmitter = new EventEmitter();

    expect(eventEmitter.emit('test_event_name')).toBe(eventEmitter);
})

test('Attach an event listener', () => {
    const eventEmitter = new EventEmitter();

    expect(eventEmitter.on('test_event_name', () => {
    })).toBe(eventEmitter);
})

test('Detach an event listener', () => {
    const eventEmitter = new EventEmitter();

    const listener = jest.fn();
    const fnc      = () => listener();

    eventEmitter.on('test_event_name', fnc)
    eventEmitter.off('test_event_name', fnc);
    eventEmitter.emit('test_event_name');
    expect(listener).toBeCalledTimes(0);
})

test('Receive an emitted event', () => {
    const eventEmitter = new EventEmitter();

    eventEmitter.on('test_event_name', (arg1, arg2) => {
        expect(arg1).toBe('test_arg_1');
        expect(arg2).toBe('test_arg_2');
    })
    eventEmitter.emit('test_event_name', 'test_arg_1', 'test_arg_2');
})

test('Receive an event once', () => {
    const eventEmitter = new EventEmitter();

    const listener = jest.fn();

    eventEmitter.once('test_event_name', () => listener())
    eventEmitter.emit('test_event_name');
    eventEmitter.emit('test_event_name');
    expect(listener).toBeCalledTimes(1);
})

test('Detach an "once" listener', () => {
    const eventEmitter = new EventEmitter();

    const listener = jest.fn();
    const fnc      = () => listener();

    eventEmitter.once('test_event_name', fnc)
    eventEmitter.off('test_event_name', fnc);
    eventEmitter.emit('test_event_name');
    expect(listener).toBeCalledTimes(0);
})

test('Re-attach a previous "once" event with same listener', () => {
    const eventEmitter = new EventEmitter();

    const listener = jest.fn();
    const fnc      = () => listener();

    eventEmitter.once('test_event_name', fnc)
    eventEmitter.off('test_event_name', fnc);
    eventEmitter.on('test_event_name', fnc);
    eventEmitter.emit('test_event_name');
    eventEmitter.emit('test_event_name');
    expect(listener).toBeCalledTimes(2);
})

test('Detach all listeners of an event', () => {
    const eventEmitter = new EventEmitter();

    const listener1 = jest.fn();
    const listener2 = jest.fn();

    eventEmitter.on('test_event_name_1', () => listener1())
    eventEmitter.on('test_event_name_2', () => listener2())
    eventEmitter.off('test_event_name_1');
    eventEmitter.emit('test_event_name_1');
    eventEmitter.emit('test_event_name_2');
    expect(listener1).toBeCalledTimes(0);
    expect(listener2).toBeCalledTimes(1);
})
