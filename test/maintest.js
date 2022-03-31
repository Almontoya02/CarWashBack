const expect = require("chai").expect;
const request = require("supertest");
const server =  require("../index");
var app = request.agent(server);


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
                email:"almon2@gg.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(false)
            })
        })
        
    })
    describe("Agregar un nuevo registro de lavado con token valido",function(){
        it("Status deberia retornar true",function(){
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
                "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbW9uMkBnZy5jb20iLCJuYW1lIjoiYWxiZXJudWFsIGdvbWV6IiwiaWF0IjoxNjQ4MjI1Mzk2fQ.4jPbS1gQ12XHAkCn_D07RPqljtpsdPbxr-qKkLZVe8w",
                email:"almon2@gg.com"
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
                "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbW9uMkBnZy5jb20iLCJuYW1lIjoiYWxiZXJudWFsIGdvbWV6IiwiaWF0IjoxNjQ4MjE0ODA3fQ.CpjDdJz3ivARsM3hwnPW_P2XPPS7rpR-v6MIlEZwX5A",
                email:"almon2@ggssss.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(true)
            })
        })
        it("Record deberian ser vacios",function(){
            app.get("/record/getbyuser/10255555222").send().set({
                "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbW9uMkBnZy5jb20iLCJuYW1lIjoiYWxiZXJudWFsIGdvbWV6IiwiaWF0IjoxNjQ4MjE0ODA3fQ.CpjDdJz3ivARsM3hwnPW_P2XPPS7rpR-v6MIlEZwX5A",
                email:"almon2@gg.com"
            }).end((err,res)=>{
                expect(res.body.data.record).to.have.lengthOf(0)
            })
        })
        
    })
    describe("Agregar un nuevo registro de lavado con token valido",function(){
        it("Status deberia retornar true",function(){
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
                "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbW9uMkBnZy5jb20iLCJuYW1lIjoiYWxiZXJudWFsIGdvbWV6IiwiaWF0IjoxNjQ4MjI1Mzk2fQ.4jPbS1gQ12XHAkCn_D07RPqljtpsdPbxr-qKkLZVe8w",
                email:"almon2@gg.com"
            }).end((err,res)=>{
                expect(res.body.status).to.equal(true)
            })
        })
        
    })
})
