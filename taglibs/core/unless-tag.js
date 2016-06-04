module.exports = function nodeFactory(elNode, context) {
    var argument = elNode.argument;

    if (!argument) {
        context.addError(elNode, 'Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>');
        return elNode;
    }

    var attributes = elNode.attributes;

    if (attributes.length) {
        context.addError(elNode, 'Invalid <unless> tag. Attributes not allowed.');
        return elNode;
    }

    var builder = context.builder;

    var test;
    try {
        test = builder.parseExpression(argument);
    } catch(e) {
        test = builder.literalFalse();
        context.addError(elNode, 'Invalid expression for unless statement:\n' + e.message);
    }

    return context.builder.ifStatement(builder.negate(test));
};