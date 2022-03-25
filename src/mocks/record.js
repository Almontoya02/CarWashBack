const { promise } = require("bcrypt/promises");
const { createRecord } = require("../routes/record/utils");

const recordsMock=[
    {
        status: true,
        message: "records get by user Done",
        data: {
            record: [
                {
                    _id: "622674df0dab6bdb63f9c5fa",
                    workerId: "10255555",
                    workerName: "albernual gomez",
                    clientId: "164158",
                    clientEmail: "almontoya02@outlook.com",
                    clientName: "Alejandro",
                    vehicleType: "Automovil",
                    washType: "Brillado",
                    washPrice: 50000,
                    date: 1646687455,
                    __v: 0
                },
                {
                    _id: "622674df0dab6bdb63f9c5fa",
                    workerId: "10255555",
                    workerName: "albernual gomez",
                    clientId: "164158",
                    clientEmail: "elmo@gg.com",
                    clientName: "elmo",
                    vehicleType: "Automovil",
                    washType: "Brillado",
                    washPrice: 50000,
                    date: 1646687455,
                    __v: 0
                },
                {
                    _id: "622674df0dab6bdb63f9c5fa",
                    workerId: "10255555",
                    workerName: "albernual gomez",
                    clientId: "164158",
                    clientEmail: "elmo@gg.com",
                    clientName: "elmo",
                    vehicleType: "Automovil",
                    washType: "Brillado",
                    washPrice: 50000,
                    date: 1646687455,
                    __v: 0
                },
                {
                    _id: "622674df0dab6bdb63f9c5fa",
                    workerId: "10255555",
                    workerName: "albernual gomez",
                    clientId: "164158",
                    clientEmail: "elmo@gg.com",
                    clientName: "elmo",
                    vehicleType: "Automovil",
                    washType: "Brillado",
                    washPrice: 50000,
                    date: 1646687455,
                    __v: 0
                },
                {
                    _id: "622674df0dab6bdb63f9c5fa",
                    workerId: "10255555",
                    workerName: "albernual gomez",
                    clientId: "164158",
                    clientEmail: "elmo@gg.com",
                    clientName: "elmo",
                    vehicleType: "Automovil",
                    washType: "Brillado",
                    washPrice: 50000,
                    date: 1646687455,
                    __v: 0
                }
            ]
        }
    }
];

class RecordServiceMock{
    async getRecords(){
        return Promise.resolve(recordsMock);
    }
    async createRecord(){
        return Promise.resolve(recordsMock.data.record[0]);
    }
}

module.exports={recordsMock,RecordServiceMock};