var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
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