document.write("<p>Hello World</p>")

const LCUConnector = require('lcu-connector');
const connector = new LCUConnector();

connector.on('connect', (data) => {
    console.log(data);
    //  {
    //    address: '127.0.0.1'
    //    port: 18633,
    //    username: 'riot',
    //    password: H9y4kOYVkmjWu_5mVIg1qQ,
    //    protocol: 'https'
    //  }
});

// Start listening for the LCU client
connector.start();
