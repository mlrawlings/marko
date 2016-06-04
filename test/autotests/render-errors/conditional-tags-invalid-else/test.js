var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(4);

    var message = e.toString();
    expect(message).to.contain('Invalid <else> tag. Attributes not allowed.');
    expect(message).to.contain('Invalid <else> tag. Argument is not allowed.');
    expect(message).to.contain('Invalid <else if> tag. Only the "if" attribute is allowed.');
    expect(message).to.contain('Invalid <else if> tag. Invalid "if" attribute.');
};
