var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain('Argument to the <include-text> tag should be a string value');
};
