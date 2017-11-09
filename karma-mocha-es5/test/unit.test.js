
describe('index.js: ', function() {
	it('isNum() should work fine.', function() {
		console.log('isNum:'+isNum(1));
		expect(isNum(1)).to.be.equal(true)
	});

	it('1+1 test', function() {
		expect(add(1,1)).to.be.equal(2)
	})
})