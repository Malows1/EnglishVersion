import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Container Style
  container: {
    backgroundColor: 'transparent',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Text Style
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    top: 20,
    left: -20,
  },
  // Texas Logo Style
  texaslogo: {
    height: 50,
    width: 50,
    top: 8,
  },
  // Background Image Style
  bg: {
    position: 'absolute', // Added position absolute to position background independently
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    zIndex: 1, // Ensure background is behind other elements
  },
  // Front Page Text Style
  ftext: {
    width: 60,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    top: 10,

    borderBottomColor: 'white',
    borderWidth: 2,
  },
  // Texas Holdem Text Style
  texasholdem: {
    width: 120,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    top: 10,
  },
  // Alert Image Style
  alert: {
    left: -22,
    width: 430,
    height: 140,
    top: 80,
  },

  // Alert Container Style
  containeralert: {
    top: 110,
    left: 0,
    right: 0,
  },
  // Latest Text Style
  latest: {
    top: 2,
    width: 200,
    left: 25,
    fontSize: 15,
    fontWeight: '800',
  },
  // Notification Text Style
  notif: {
    top: 4,
    width: 370,
    left: 21,
    fontSize: 15,
    fontWeight: '800',
  },
  // Welcome Container Style
  welcome: {
    top: 130,
    left: 21,
  },
  // Poker Text Style
  poker: {
    fontSize: 35,
    width: 300,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Play Text Style
  play: {
    top: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Weblink Container Style
  weblink: {
    top: 140,
    padding: 15,
    left: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Weblink Image Styles
  wlink: {
    width: 160,
    height: 50,
  },
  wpage: {
    width: 160,
    height: 50,
  },
  link: {
    top: -117,
    left: -40,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  linksupport: {
    fontSize: 10,
    top: -116,
    left: 57,
  },
  // Web Text Container Style
  webtext: {
    top: 200,
    width: 300,
  },
  // Web Version Text Styles
  version: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    left: 194,
    top: -147,
  },
  versionsupport: {
    fontSize: 10,
    top: -146,
    left: 290,
  },
  // Link Container Style
  linkcontainer: {
    top: 60,
    padding: 15,
    left: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Add Link Styles
  alink: {
    width: 170,
    height: 34,
  },
  dlink: {
    left: 10,
  },

  // Web-Mobile Text Styles
  webmobile: {
    top: 20,
    left: 45,
    fontSize: 10,
    color: '#fff',
  },
  deskmobile: {
    left: -10,
  },
  // Web-Mobile Container Style
  webmobilecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Store Container Style
  storecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Store Box Styles
  box: {
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 3,
    color: '#fff',
    width: 165,
    top: 50,

    paddingTop: 30,

    height: 70,
    left: 20,
  },
  // Android Store Styles
  android: {
    left: -4,
    paddingLeft: 10,
  },
  // Apple Store Image Styles
  applestore: {
    width: 50,
    height: 22,
    left: 80,
    top: -16,
    alignSelf: 'center',

    tintColor: 'white',
  },
  // Google Store Image Styles
  googlestore: {
    alignSelf: 'center',
    left: -65,
    top: -15,
    width: 25,
    height: 26,
  },
  // Store Image Container Styles
  storeimage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Support Text Style
  support: {
    color: 'gray',
    fontSize: 12,
  },
  //Download cointainer style
  downloadcontainer:{
    flexDirection: 'row',
  
    justifyContent: 'space-between',
  },
  Downloadbox:{
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 3,
    color: '#fff',
    width: 165,
    top: 50,

    paddingTop: 30,

    height: 70,
    left: 20,
  },
  DownloadHuawei:{
    left: -4,
    paddingLeft: 1,
  },
  AndroidDownload:{
    width: 50,
    height: 30,
    left: 80,
    top: -15,
    tintColor: 'white',
  },
  DownloadImage:{
    flexDirection: 'row',
  
    justifyContent: 'space-between',
  },
  HuaweiDownload:{
     width: 40,
    height: 30,
  left:-60,
    top: -12,
   
  }

});
export default styles;
