import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  LayoutAnimation,
  ActivityIndicator,
} from 'react-native';

// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
// } from 'react-native';

import Button from 'apsl-react-native-button'

import { Makiko as TextInput } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { TimelineRoute } from './routes';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			showLoginForm: false,
			showLoading: false,
		};
	}

	componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    StatusBar.setBarStyle('light-content', true);
  }

  handleLogin = () => {
  	this.setState({
			showLoading: true
		}, () => {
			setTimeout(() => {
				this.setState({
					showLoading: false
				}, () => {
					this.props.navigator.push(TimelineRoute);
				});
			}, 500);
		})
  };

	renderLoginForm() {
		return (
			<Animatable.View animation="slideInUp" duration={300} easing="linear" style={{ width: 300 }}>
				<TextInput
					label={'Comment'}
			    iconClass={FontAwesomeIcon}
			    iconName={'comment'}
			    iconColor={'white'}
			    inputStyle={{ color: '#db786d' }}
					value="Ranatchai Chernbamrung"
			    placeholder={'Full Name'}			    
			  />
			  <TextInput
			  	label={'Comment'}
			    iconClass={FontAwesomeIcon}
			    iconName={'comment'}
			    iconColor={'white'}
			    inputStyle={{ color: '#db786d' }}
			  	value="MY=Password"
			    placeholder={'Password'}			    
			    secureTextEntry
			  />
			  <Button
					style={styles.buttonStyle}
					textStyle={styles.buttonTextStyle}
					key="login"
					onPress={this.handleLogin}
					>
					เข้าสู่ระบบ
				</Button>
			</Animatable.View>
		);
	}

	renderPreLogin() {
		return (
			<View style={{ width: 300 }}>
				<Button
					style={styles.buttonStyle}
					textStyle={styles.buttonTextStyle}
					onPress={() => {
						this.setState({
							showLoginForm: true
						})
					}}
					>
					ต่อไป
				</Button>
			</View>
		);
	}

	render() {
		console.log('hello world from react native code');
		
		const { showLoginForm, showLoading } = this.state;
		// const showLoginForm = this.state.showLoginForm;
		// const showLoading = this.state.showLoading;
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={[styles.logoContainer, showLoginForm && styles.logoContainerSmall]}>
						<Image
							source={require('./assets/logo.png')}
							style={styles.logo}
						/>
						<Text style={styles.title}>ReactJS Bangkok 1.0.0</Text>
					</View>
					<View>
					{showLoginForm? this.renderLoginForm(): this.renderPreLogin()}
					</View>
				</View>
				{showLoading && (
					<View style={styles.loadingContainer}>
						<ActivityIndicator size="large" color="white" style={styles.loading}/>
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#383838',
		justifyContent: 'center',
	},
	content: {
		alignSelf: 'center'
	},
	logoContainer: {
		transform: [{ scale: 1 }],
		alignSelf: 'center'
	},
	logoContainerSmall: {
		transform: [{ scale: 0.8 }],
	},
	logo: {
		width: 150,
		height: 150,
		alignSelf: 'center'
	},
	title: {
		fontSize: 24,
		color: 'white',
		marginTop: 16	,
		marginBottom: 16,
		textAlign: 'center'
	},	
	buttonStyle: {
		marginTop: 20,
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 20
	},
	buttonTextStyle: {
		color: 'white'
	},
	loadingContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.7)',
		justifyContent: 'center'
	},
	loading: {
		alignSelf: 'center',		
	},
})