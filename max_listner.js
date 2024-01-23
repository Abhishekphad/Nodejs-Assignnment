const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
 console.log(
    `The default maximum event listner are : ${eventEmitter.getMaxListeners()}`
    );
 eventEmitter.setMaxListeners(50);
 console.log(
    `Updatad maximum event listner are: ${eventEmitter.getMaxListeners()}`
    );