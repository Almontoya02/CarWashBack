var assert = require('assert');

  describe('Suma', function () {
    it('Suma debe resultar 9', function () {
      assert.equal(5+4, 9);
    });
  });

  describe('Resta', function () {
    it('Resta debe dar 1', function () {
      assert.equal(3-2, 1);
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