import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Card,
	CardItem,
	Thumbnail,	
} from 'native-base';

export default class Timeline extends Component {
	componentDidMount() {
		StatusBar.setBarStyle('default', true);
	}
	render() {
		return (
			<Container>				
        <Header>
          <Button transparent onPress={() => this.props.navigator.pop()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Timeline 1</Title>

          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
	      </Header>
        <Content style={styles.container}>        	
        	<Card style={styles.card}>
            <CardItem>
              <Thumbnail source={require('./assets/profile.jpg')} />
              <Text>Ranatchai Chernbamrung</Text>
            </CardItem>

            <CardItem>
              <Image style={styles.image} resizeMode={Image.resizeMode.contain} source={require('./assets/cover.jpg')} />
            </CardItem>

            <CardItem>
              <Icon name={'ios-star-outline'} style={{color : '#ED4A6A'}} />              
            </CardItem>
         	</Card>
         	<Card style={styles.card}>
            <CardItem>
              <Thumbnail source={require('./assets/panj.jpg')} />
              <Text>Panjamapong Sermsawatsri</Text>
            </CardItem>

            <CardItem>
              <Image style={styles.image} resizeMode={Image.resizeMode.contain} source={require('./assets/panj-cover-2.jpg')} />
            </CardItem>

            <CardItem>
              <Icon name={'ios-star-outline'} style={{color : '#ED4A6A'}} />              
            </CardItem>
         	</Card>
        </Content>
      </Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, backgroundColor: 'white'
	},
	card: {
		marginVertical: 5
	},
	image: {
		maxWidth: Dimensions.get('window').width
	}
});