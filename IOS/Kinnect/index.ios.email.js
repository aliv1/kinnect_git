/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;
var LinearGradient = require('react-native-linear-gradient');
var Kinnect = React.createClass({
  render: function() {
    return (
      <LinearGradient colors={['#0ba0d3', '#0774b7', '#023692']} style={styles.container}>
        <View>
          <Image
            source={require('image!Icon')}
            style={styles.icon}/>
              <View style={styles.email}>
                <Text style={styles.text}> Email 1 </Text>
                  <TextInput style={styles.input}
                  onChangeText={(text) => this.setState({input: text})}
                  />
              </View>
              <View style={styles.email}>
                <Text style={styles.text}> Email 2 </Text>
                  <TextInput style={styles.input}
                  onChangeText={(text) => this.setState({input: text})}
                  />
              </View>
              <View style={styles.email}>
                <Text style={styles.text}> Email  3</Text>
                  <TextInput style={styles.input}
                  onChangeText={(text) => this.setState({input: text})}
                  />
                <View>
                  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.submit}>
                    <TouchableHighlight onPress={this.submit}>
                      <Text style={styles.loginText}>Send</Text>
                    </TouchableHighlight>
                  </LinearGradient>
                  </View>
              </View>
        </View>
      </LinearGradient>
    );
  }
});

var styles = StyleSheet.create({
  icon:{
    top: 1,
    position: 'relative',
    width: 75,
    height:75,
    alignSelf:'center',
    opacity: 50,
    padding: 25,
  },
  container: {
    flexDirection:'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 0.25,
    borderColor:'#FFFFFF',
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: 25,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
email: {
    flexDirection: 'row',
    height: 75,
    padding: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Kinnect', () => Kinnect);
