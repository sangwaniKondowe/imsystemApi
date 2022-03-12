'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_roles', [
       
      {
        id: 1,
        uuid: "e4826e50-a181-11ec-b909-0242ac120002",
        userId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      id: 2,
      uuid: "e4827288-a181-11ec-b909-0242ac120002",
      userId: 2,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      id: 3,
      uuid: "e4827440-a181-11ec-b909-0242ac120002",
      userId: 3,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    id: 4,
    uuid: "e48275b2-a181-11ec-b909-0242ac120002",
    userId: 4,
    roleId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      id: 5,
      uuid: "e4827706-a181-11ec-b909-0242ac120002",
      userId: 5,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      uuid: "e482781e-a181-11ec-b909-0242ac120002",
      userId: 6,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      uuid: "e4827936-a181-11ec-b909-0242ac120002",
      userId: 7,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      uuid: "e4827a44-a181-11ec-b909-0242ac120002",
      userId: 8,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      uuid: "e4827d82-a181-11ec-b909-0242ac120002",
      userId: 9,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      uuid: "e4827e90-a181-11ec-b909-0242ac120002",
      userId: 10,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      uuid: "e48281ec-a181-11ec-b909-0242ac120002",
      userId: 11,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      uuid: "e482830e-a181-11ec-b909-0242ac120002",
      userId: 12,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      uuid: "e4828412-a181-11ec-b909-0242ac120002",
      userId: 13,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      uuid: "e4828520-a181-11ec-b909-0242ac120002",
      userId: 14,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      uuid: "e482862e-a181-11ec-b909-0242ac120002",
      userId: 15,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 16,
      uuid: "e4828732-a181-11ec-b909-0242ac120002",
      userId: 16,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      uuid: "e4828aca-a181-11ec-b909-0242ac120002",
      userId: 17,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 18,
      uuid: "e4828bf6-a181-11ec-b909-0242ac120002",
      userId: 18,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 19,
      uuid: "e4828d0e-a181-11ec-b909-0242ac120002",
      userId: 19,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 20,
      uuid: "e4828e30-a181-11ec-b909-0242ac120002",
      userId: 20,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 21,
      uuid: "e4828f3e-a181-11ec-b909-0242ac120002",
      userId: 21,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete( 'user_roles', null, {});
     
  }
};