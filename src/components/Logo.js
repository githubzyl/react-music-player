import React from 'react';
require('../styles/less/logo.less');

export default class Logo extends React.Component {
    render() {
        return (
        	<div className="row components-logo">
        		<img src="images/logo.png" width="40" alt="" className="-col-auto"/>
        		<h1 className="caption">Music Player Build By React</h1>
        	</div>
        );
    }
}
