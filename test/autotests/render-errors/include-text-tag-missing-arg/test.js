var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain('Invalid <include-text> tag. Argument is missing.');
};
