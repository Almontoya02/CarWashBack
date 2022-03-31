const expect = require("chai");
const request = require("supertest");
const server =  require("../index");
var app = request.agent(server);
var assert = require('assert');

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbW9uQGdnLmNvbSIsIm5hbWUiOiJBbGVqaXRvIE1vbnRveWl0YSIsImlhdCI6MTY0ODc1NzIzN30.d82FVTRvEgCcigTLmdrLJ0pim9rzmYmvsH5zu3Pc4fQ"

describe("Suma",()=>{
    it("Deberia retornar 12",()=>{
        let num1 =3;
        let num2 = 4;

        assert.equal(num1*num2,12);
        
    });
});

/**describe("get request",function(){
    describe("Traer registros sin un usuario existente",function(){
        it("Status deberia retornar true",async function(){
            let response = await app.get("/record/getbyuser/10255555222").send().set({
                "access-token":token,
                email:"almon@gg.com"
            }).then((res)=>{
                console.log(res.body)
                return res.body.status
            }).catch(err=>console.log(err));
            expect(response).to.equal(false)
        });
    });
});
**/