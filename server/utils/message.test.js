const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {

        var from = 'Vito';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message).toMatchObject({ from, text });
        expect(typeof message.createdAt).toBe('number');
        
    });

});

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {

        var from = 'Vito';
        var latitude = 1;
        var longitude = 2;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message).toMatchObject({from, url});
        expect(typeof message.createdAt).toBe('number');


    });

});