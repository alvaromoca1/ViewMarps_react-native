import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class App extends Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>View of MAPS</Text>
        <Text>https://github.com/react-native-community/react-native-maps</Text>
        <MapView style={styles.map}
          initialRegion={{
          latitude: -18.0114652,
          longitude: -70.2513686,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    height: '70%',
    width:'100%'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    paddingVertical:'10%'
  }
});
