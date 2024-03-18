import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from '../styles/indexstyle';

const index = () => {
  // Images
  const img = require('../images/logo.png');
  const bg = require('../images/background.png');
  const alert = require('../images/alert.png');
  const weblink = require('../images/weblink.png');
  const webpage = require('../images/webpage.png');
  const applink = require('../images/mobile.png');
  const desklink = require('../images/desktop.png');
  const apple = require('../images/apple.png');
  const android = require('../images/Google_Play.png');
  const download = require('../images/Download.png');
  const Huawei = require('../images/Huawei.png');
  return (
    <SafeAreaView>
      {/* Background Image */}
      <Image source={bg} style={styles.bg} />

      {/* Logo and Text Container */}
      <View style={styles.container}>
        <Image source={img} style={styles.texaslogo} />
        <Text style={styles.text}>Come and Play</Text>
        <Text style={styles.ftext}>Front Page</Text>
        <Text style={styles.texasholdem}>Texas Holdem Glossary</Text>
      </View>

      {/* Alert Container */}
      <View style={styles.containeralert}>
        <Image source={alert} style={styles.alert} />
        <Text style={styles.latest}>The Latest web version is online</Text>
        <Text style={styles.notif}>
          Can be played on computer web pages. Apple and Android mobile phone
          web pages
        </Text>
      </View>

      {/* Welcome Text Container */}
      <View style={styles.welcome}>
        <Text style={styles.poker}>Texas Holdem Poker Game Community</Text>
        <Text style={styles.play}>Lets Play Together</Text>
      </View>

      {/* Weblink Container */}
      <View style={styles.weblink}>
        <Image source={weblink} style={styles.wlink} />
        <Image source={webpage} style={styles.wpage} />
      </View>

      {/* Web Text Container */}
      <View style={styles.webtext}>
        <Text style={styles.link}>Web version link</Text>
        <Text style={styles.linksupport}>(support PC, Apple, Android)</Text>
        <Text style={styles.version}>Web version link</Text>
        <Text style={styles.versionsupport}>(support PC, Apple, Android)</Text>
      </View>

      {/* Link Container */}
      <View style={styles.linkcontainer}>
        <Image source={applink} style={styles.alink} />
        <Image source={desklink} style={[styles.alink, styles.dlink]} />
      </View>

      {/* Web-Mobile Container */}
      <View style={styles.webmobilecontainer}>
        <Text style={styles.webmobile}> Add the web version to mobile.</Text>
        <Text style={[styles.webmobile, styles.deskmobile]}>
          {' '}
          Add the web version to mobile.
        </Text>
      </View>

      {/* Store Container */}
      <View style={styles.storecontainer}>
        <Text style={[styles.box, styles.apple]}>
          Download from Apple{'\n'}
          <Text style={styles.support}>(Support Apple)</Text>
        </Text>
        <Text style={[styles.box, styles.android]}>
          Download from Google{'\n'}
          <Text style={styles.support}>(Support Android)</Text>
        </Text>
      </View>

      {/* Store Image Container */}
      <View style={styles.storeimage}>
        <Image source={apple} style={styles.applestore} />
        <Image source={android} style={styles.googlestore} />
      </View>
     {/* Download */}

      <View style = {styles.downloadcontainer}>
      <Text style={[styles.Downloadbox, styles.DownloadAnroid]}>
          Android Local Download{'\n'}
          <Text style={styles.support}>(Support Android)</Text>
</Text>
<Text style={[styles.Downloadbox, styles.DownloadHuawei]}>
          Huawei Version Download{'\n'}
          <Text style={styles.support}>(Support Huawei)</Text>
</Text>
      </View>
      <View style = {styles.DownloadImage}>

      <Image source={download} style={styles.AndroidDownload} />
        <Image source={Huawei} style={styles.HuaweiDownload} />
      </View>
    </SafeAreaView>
  );
};

export default index;
