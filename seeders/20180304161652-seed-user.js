'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // PASS : 99032 => '$2a$10$NUckPE1ErB7SRKVeeKKYcOQPvbb7HJQ7mXC5xpuz.fC1kQ3QucGL2',
    return queryInterface.bulkInsert('User', [
        {
            id: '10e0e993-b796-4168-b017-2b15b164086c',
            firstName: 'Admin',
            lastName: 'Admin',
            email: 'admin@gmail.com',
            password: '$2a$10$NUckPE1ErB7SRKVeeKKYcOQPvbb7HJQ7mXC5xpuz.fC1kQ3QucGL2',
            role: 'admin',
            creationDate: new Date(),
            updatedOn: new Date(),
        },
        {
            id: '10e0e993-b796-4168-b017-2b15b164086f',
            firstName: 'Test',
            lastName: 'Member',
            email: 'member@gmail.com',
            password: '$2a$10$NUckPE1ErB7SRKVeeKKYcOQPvbb7HJQ7mXC5xpuz.fC1kQ3QucGL2',
            role: 'member',
            creationDate: new Date(),
            updatedOn: new Date(),
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
