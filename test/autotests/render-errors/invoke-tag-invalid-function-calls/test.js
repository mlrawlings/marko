var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(2);

    var message = e.toString();
    expect(message).to.contain('Invalid <invoke> tag. Missing function attribute.');
    expect(message).to.contain('Invalid <invoke> tag. Missing function arguments.');
};
