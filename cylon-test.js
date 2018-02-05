var Cylon = require('cylon');

//c256808d6004

Cylon.robot({
    connections: {
      bluetooth: { adaptor: 'ble', uuid: 'e0060dfaa340', module: 'cylon-ble' },
      //bluetooth2: { adaptor: 'ble', uuid: 'ec2757f8d049', module: 'cylon-ble' },
     },

    devices: {
        bb8: { driver: 'bb8', module: 'cylon-sphero-ble' , connection: 'bluetooth'}
      //bb9: { driver: 'bb8', module: 'cylon-sphero-ble', connection: 'bluetooth2' }

    },

    work: function (my) {
        my.bb8.color(0x00FFFF);

        after(500, function () {
            my.bb8.color(0xFF0000);
        });

        after(1000, function () {
            my.bb8.roll(60, 0);
        });

        after(2000, function () {
            my.bb8.roll(60, 180);
        });

        after(3000, function () {
            my.bb8.stop();
        });
    }
}).start();