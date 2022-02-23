/* eslint-disable no-undef */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text, StyleSheet, backgroundColor, Button, Alert} from 'react-native';
import Login from './login';
import power from './images/Power.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import hist from './images/hist.png';
import set from './images/set.png';

espIP = new String();
isConnected = 0;
espIP = Login.espIP;
cookie = Login.cookie;

const Home = ({FontSize}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wireless Charger Controller</Text>
        <View style={styles.textcontainer}></View>
      </View>
      <TouchableOpacity onPress={() => buttonPress()}>
        <Image style={{width: 200, height: 200}} source={power} />
      </TouchableOpacity>
      <Text style={[styles.text, {fontSize: FontSize}]}>
        Press to turn Charger on and off
      </Text>

      <View style={styles.spacing}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('History')}>
          <Text>Historical Use</Text>
          <Image style={{width: 50, height: 50}} source={hist} />
        </TouchableOpacity>
      </View>
      <View style={styles.spacing}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text>Settings</Text>
          <Image style={{width: 50, height: 50}} source={set} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  spacing: {
    width: '50%',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    fontFamily: 'Ubuntu-Bold',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: '80%',
    flexDirection: 'row',
    padding: 10,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'cornflowerblue',
  },
  textcontainer: {
    textAlign: 'center',
    paddingTop: 10,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default Home;

async function buttonPress() {
  Alert.alert('LED Switch Pressed');

  const res = await fetch(`http://${espIP}/toggle`, {
    method: 'GET',
    headers: {
      cookie: cookie,
    },
  }).catch(err => Alert.alert('not connected to ESP'));

  ChargeCheck();
}

// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   SafeAreaView,
//   FlatList,
//   RefreshControl,
// } from 'react-native'
// import { ListItem } from 'react-native-elements'
// import Zeroconf from 'react-native-zeroconf'

// const zeroconf = new Zeroconf()

// export default class App extends Component {
//   state = {
//     isScanning: false,
//     selectedService: null,
//     services: {},
//   }

//   componentDidMount() {
//     this.refreshData()

//     zeroconf.on('start', () => {
//       this.setState({isScanning: true});
//       console.log('[Start]')
//     })

//     zeroconf.on('stop', () => {
//       this.setState({ isScanning: false })
//       console.log('[Stop]')
//     })

//     zeroconf.on('resolved', service => {
//       console.log('[Resolve]', JSON.stringify(service, null, 2))

//       this.setState({
//         services: {
//           ...this.state.services,
//           [service.host]: service,
//         },
//       })
//     })

//     zeroconf.on('error', err => {
//       this.setState({ isScanning: false })
//       console.log('[Error]', err);
//     })
//   }

//   renderRow = ({ item, index }) => {
//     const {name, fullName, host} = this.state.services[item];

//     return (
//       <TouchableOpacity
//         onPress={() =>
//           this.setState({
//             selectedService: host,
//           })}
//       >
//         <ListItem title={name} subtitle={fullName} />
//       </TouchableOpacity>
//     )
//   }

//   refreshData = () => {
//     const { isScanning } = this.state
//     if (isScanning) {
//       return
//     }

//     this.setState({services: []});

//     zeroconf.scan('http', 'tcp', 'local.');

//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       zeroconf.stop();
//     }, 5000);
//   }

//   render() {
//     const { services, selectedService, isScanning } = this.state
//     console.log(selectedService)

//     const service = services[selectedService]

//     if (service) {
//       return (
//         <SafeAreaView style={styles.container}>
//           <TouchableOpacity onPress={() => this.setState({ selectedService: null })}>
//             <Text style={styles.closeButton}>{'CLOSE'}</Text>
//           </TouchableOpacity>

//           <Text style={styles.json}>{JSON.stringify(services, null, 2)}</Text>
//         </SafeAreaView>
//       )
//     }

//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.state}>{isScanning ? 'Scanning..' : 'Stopped'}</Text>

//         <FlatList
//           data={Object.keys(services)}
//           renderItem={this.renderRow}
//           keyExtractor={key => key}
//           refreshControl={
//             <RefreshControl
//               refreshing={isScanning}
//               onRefresh={this.refreshData}
//               tintColor="skyblue"
//             />
//           }
//         />
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   closeButton: {
//     padding: 20,
//     textAlign: 'center',
//   },
//   json: {
//     padding: 10,
//   },
//   state: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 30,
//   },
// });
