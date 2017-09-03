import React from 'react';
require('../styles/less/listitem.less');
let PubSub = require('pubsub-js');

export default class ListItem extends React.Component {
    deleteHandler(item, event) {
      event.stopPropagation();
      PubSub.publish('DEL_MUSIC', item);
    }
    playMusic(item) {
      PubSub.publish('PLAY_MUSIC', item);
    }
    render() {
    	let item = this.props.data;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.playMusic.bind(this, item)}>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
        );
    }
}
