import React from 'react';
import ListItem from '../components/ListItem';


export default class List extends React.Component {
    render() {
    	let Items = this.props.musicList.map((item) => {
    		return (
    			<ListItem
    				key={item.id}
    				data={item}
            focus={this.props.currentMusitItem === item}
    			></ListItem>
    		);
    	});
        return (
            <ul>
                { Items }
            </ul>
        );
    }
}
