'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
       
      {
        id: 1,
        uuid: "04814308-a16d-11ec-b909-0242ac120002",
        role_name: "STUDENT",
        createdAt: new Date(),
        updatedAt: new Date(),
     },
    {
        id: 2,
        uuid: "04814682-a16d-11ec-b909-0242ac120002",
        role_name: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
    }, 
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete( 'roles', null, {});
     
  }
};
