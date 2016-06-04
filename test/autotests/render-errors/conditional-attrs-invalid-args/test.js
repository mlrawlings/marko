var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(4);

    var message = e.toString();
    expect(message).to.contain('Unexpected identifier: (true sdsds)');
    expect(message).to.contain('Unexpected number: (data.foo === dasda 0)');
    expect(message).to.contain('Unexpected token =: (data.foo ==== 1)');
    expect(message).to.contain('Unexpected identifier: (foo is true)');
};
