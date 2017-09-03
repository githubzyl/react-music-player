import React from 'react';
require('../styles/less/logo.less');

let logoUrl = require('../images/logo.png')

export default class Logo extends React.Component {
    render() {
        return (
        	<div className="row components-logo">
        		<img src={logoUrl} width="40" alt="" className="-col-auto"/>
        		<h1 className="caption">Music Player Build By React</h1>
        	</div>
        );
    }
}
