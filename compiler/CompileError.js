'use strict';

const HtmlElement = require('./ast/HtmlElement');

class CompileError {
    constructor(errorInfo, context) {
        this.context = context;
        this.node = errorInfo.node;
        this.message = errorInfo.message;
        this.code = errorInfo.code;

        var pos = errorInfo.pos;
        var endPos = errorInfo.endPos;

        if (pos == null) {
            pos = this.node && this.node.pos;
        }

        if (endPos == null) {
            endPos = this.node && this.node.endPos;
        }

        if (pos != null) {
            pos = context.getPosInfo(pos);
        }

        if (endPos != null) {
            endPos = context.getPosInfo(endPos);
        }

        this.pos = pos;
        this.endPos = endPos;
    }

    toString() {
        var pos = this.pos || '';
        if(pos) {
            pos = ''+this.pos+'] ';
        }

        var node = this.node;
        if(!node) {
            node = '';
        } else if (node instanceof HtmlElement) {
            node = 'Invalid <'+node.tagName+'> tag. ';
        } else {
            node = 'Invalid ' + node.type + ' node. ';
        }

        var str = pos + node + this.message;
        if (pos == null && this.node) {
            str += ' (' + this.node.toString() + ')';
        }
        return str;
    }
}

module.exports = CompileError;