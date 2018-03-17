const expect = require('expect');

const {Users} = require('./users');

describe('users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jane',
            room: 'Travels'
        },{
            id: '2',
            name: 'John',
            room: 'Travels'
        },{
            id: '3',
            name: 'Jennifer',
            room: 'Sports'
        }];
    });

    it('should add new user', () => {

        var users = new Users();
        var user = {
            id: '123',
            name: 'Vito',
            room: 'Test'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);

    });

    it('should remove a user', () => {

        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);

    });

    it('should not remove a user', () => {

        var userId = '5';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);

    });

    it('should find a user', () => {

        var userId = '1';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);

    });

    it('should not find a user', () => {

        var userId = '5';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();

    });

    it('should return names for travels room', () => {

        var names = users.getUserList('Travels');

        expect(names).toEqual(['Jane', 'John']);

    });

    it('should return names for sports room', () => {

        var names = users.getUserList('Sports');

        expect(names).toEqual(['Jennifer']);

    });

});