var React = require('react');
var ReactClass = require('./ReactClass.jsx');
var CodeStore = require('../stores/CodeStore');

module.exports = React.createClass({
    render: function () {
        var codeStore = new CodeStore('base');

        return <ReactClass codeStore = {codeStore}></ReactClass>;
    }

});