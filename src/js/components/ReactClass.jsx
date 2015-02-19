var React = require('react');
var CodeMirror = require('./CodeMirror.jsx');


module.exports = React.createClass({
    render: function () {
        return <CodeMirror codeStore = {this.props.codeStore}></CodeMirror>
    }
});