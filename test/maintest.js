const expect = require("chai").expect;
const request = require("supertest");
const server =  require("../index");
var app = request.agent(server);

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbW9uQGdnLmNvbSIsIm5hbWUiOiJBbGVqaXRvIE1vbnRveWl0YSIsImlhdCI6MTY0ODc1NzIzN30.d82FVTRvEgCcigTLmdrLJ0pim9rzmYmvsH5zu3Pc4fQ"

describe("post request",function(){
    describe("Agregar un nuevo registro de lavado sin token valido",function(){
        it("Status deberia retornar false",function(){
            app.post("/record/create").send({
                workerId:"10255555",
                workerName:"albernual gomez",
                clientId:"164158",
                clientName:"elmo",
                clientEmail:"elmo@gg.com",
                vehicleType:"Automovil",
                washType:"Brillado",
                washPrice:50000
            }).set({
                "access-token":"nulll",
                email:"almon@gg.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(false)
            })
        })
        
    })
    describe("Agregar un nuevo registro de lavado con token valido",function(){
        it("Status deberia retornar true",function(){
            app.post("/record/create").send({
                workerId:"105600000",
                workerName:"Alejito Montoyita",
                clientId:"164158",
                clientName:"elmo",
                clientEmail:"elmo@gg.com",
                vehicleType:"Automovil",
                washType:"Brillado",
                washPrice:50000
            }).set({
                "access-token":token,
                email:"almon@gg.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(true)
            })
        })
        
    })
})

describe("get request",function(){
    describe("Traer registros sin un usuario existente",function(){
        it("Status deberia retornar true",function(){
            app.get("/record/getbyuser/10255555222").send().set({
                "access-token":token,
                email:"almon@gg.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(true)
            })
        })
        it("Record deberian ser vacios",function(){
            app.get("/record/getbyuser/10255555222").send().set({
                "access-token":token,
                email:"almon@gg.com"
            }).end((err,res)=>{
                expect(res.body.data.record).to.have.lengthOf(0)
            })
        })
        
    })
    describe("Agregar un nuevo registro de lavado con token valido",function(){
        it("Status deberia retornar true",function(){
            app.post("/record/create").send({
                workerId:"105600000",
                workerName:"Alejito Montoyita",
                clientId:"164158",
                clientName:"elmo",
                clientEmail:"elmo@gg.com",
                vehicleType:"Automovil",
                washType:"Brillado",
                washPrice:50000
            }).set({
                "access-token":token,
                email:"almon@gg.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(true)
            })
        })
        
    })
})
