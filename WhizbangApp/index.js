import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
        style={{ flex: 1 }}
        debug
        planeDetection
        lightEstimation
        >
        <ARKit.Pyramid
            pos={{ x: 0.1, y: 0.5, z: -1 }}
            shape={{ width: 0.2, height: 0.2, length: 0.2 }}
        />
        </ARKit>
      </View>
    );
  }
}
AppRegistry.registerComponent('WhizbangApp', () => App);