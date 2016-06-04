var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(3);

    var message = e.toString();
    expect(message).to.contain('Unexpected number: (true 0)');
    expect(message).to.contain('Unexpected token ): (false +)');
    expect(message).to.contain('Unexpected token true: (true true)');
};
