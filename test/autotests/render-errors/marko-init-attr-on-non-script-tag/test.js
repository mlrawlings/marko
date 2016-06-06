var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain('The "marko-init" attribute should only be used on the <script> tag');
};
