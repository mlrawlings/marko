var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(4);

    var message = e.toString();
    expect(message).to.contain('Invalid if attribute. Argument is missing.');
    expect(message).to.contain('Invalid unless attribute. Argument is missing.');
    expect(message).to.contain('Invalid else-if attribute. Argument is missing.');
    expect(message).to.contain('Invalid body-only-if attribute. Argument is missing.');
};
