var React = require('react');
var CodeMirror = require('codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/neat.css');

module.exports = React.createClass({
    componentDidMount: function () {
        this.editor = CodeMirror.fromTextArea(this.refs.code.getDOMNode(), {
            mode: 'javascript',
            lineNumbers: false,
            lineWrapping: true,
            smartIndent: false,
            matchBrackets: true,
            theme: 'neat',
            readOnly: this.props.readOnly,
            tabWidth: 2
        });
        this.editor.on('change', (editor) => this.props.codeStore.setCode(editor.getValue()));

    },
    render: function () {
        return <textarea ref = "code" value = {this.props.codeStore.getCode()}></textarea>;
    }
});