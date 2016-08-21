import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ListView
} from 'react-native';
import { Container, Content, Badge } from 'native-base';

function getJSON(topic, options = { limit: 5 }) {
	return fetch(`https://www.reddit.com/r/${topic}.json`)
		.then(resp => {
			if (resp.status !== 200) {
				throw new Error('fetch data failed');
			}
			return resp.json();
		})
		.then(result => {
			return result.data.children;
		});
}

function Header({ title }) {
	return (
		<View style={styles.header}>
			<Text>{title}</Text>
		</View>
	);
}

function ListItem({ title, score }) {
	return (
		<View style={styles.listItem}>
			<View style={styles.listScore}>
				<Badge primary><Text style={styles.badge}>{score}</Text></Badge>
			</View>
			<Text style={styles.listTitle}>{title}</Text>
		</View>
	);
}
export default class NewFeeds extends Component {
	constructor() {
		super();
	  this.state = {
	    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
	  };	
	}

	componentDidMount() {
		getJSON('dota2').then(list => {
			console.log('list', list);
			this.setState({ dataSource: this.state.dataSource.cloneWithRows(list) })
		}).catch(err => {
			console.warn(err);
		});
	}

	renderRow({ data }) {
		return (
			<ListItem
				title={data.title}
				score={data.score}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Reddit Dota 2"/>
				<ListView
					style={styles.list}
					dataSource={this.state.dataSource}
	      	renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		paddingTop: Platform.OS === 'android'? 0: 20,
		backgroundColor: 'rgb(200, 0, 0)',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	list: {
		flex: 1,		
	},
	
	listItem: {
		height: 50,
		flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'center'
	},
	listScore: {
		width: 70,
		paddingHorizontal: 10,
		alignSelf: 'center'
	},
	badge: {
		fontSize: 12
	},
	listTitle: {
		flex: 1
	},
})