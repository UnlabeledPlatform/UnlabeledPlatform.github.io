import logo from './logo.svg';
import art from './art.png'
import './App.css';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import { BrowserView, MobileView } from 'react-device-detect';
import { useEffect } from 'react';

function App() {
  //made this in an hour... probably tons of bugs.
  //1REM = 16?
  useEffect(() => {
    document.title = "[un.]"
  }, [])

  return (
    <>
      <BrowserView>
      <View style={{height: Dimensions.get('window').height, width:  Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fafafa'}}>
        <img src={art} height={'100%'} width={'50%'} style={{marginLeft: -10}}></img>

        <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 50}}>
          <View style={{height: '72%', width: window.innerWidth*.33, backgroundColor: '#fff', shadowColor: '#000', shadowOffset: {width: 3, height: 3}, shadowOpacity: .6, shadowRadius: 8, elevation: 10, paddingHorizontal: '10%', paddingVertical: '5%', justifyContent: 'center'}}>
            
            <View>
            <Text style={styles.h4}>UNVEIL, INC.</Text>
            <Text style={[styles.p2, {marginTop: 10}]}>Austin TX, 2023</Text>

            <Text style={[styles.h4, {marginTop: 30}]}>"Art Investment for the Masses"</Text>
            <Text style={[styles.p2, {marginTop: 10}]}>September 2023</Text>
            <Text style={[styles.p3, {marginTop: 5, textDecorationLine: 'underline'}]}>iOS Closed Beta</Text>

            <Text style={[styles.p3, {marginTop: 70}]}>Unveil is a fractional art investment platform that enables artists to list their work and allows their fans to fractionally purchase stakes in their pieces. Unveil holds the piece and solicits acquisition offers from third party collectors. Once the piece is resold, the artist's initial supporters profit respectively to their stakes. We're a small team making art accessible— for creatives and fans alike.</Text>
            
            <Text style={[styles.p3, {marginTop: 70}]}>(585)-530-9895</Text>
            <Text style={[styles.p3, {marginTop: 5, textDecorationLine: 'underline'}]}>management@unveil.group</Text>
            </View>

          </View>
        </View>

      </View>
      </BrowserView>
      <MobileView>
      <View style={{height: Dimensions.get('window').height, width:  Dimensions.get('window').width, alignItems: 'center', backgroundColor: '#fafafa', justifyContent: 'center'}}>

          <View style={{height: '90%', width: window.innerWidth*.9, backgroundColor: '#fff', shadowColor: '#000', shadowOffset: {width: 3, height: 3}, shadowOpacity: .6, shadowRadius: 8, elevation: 10, paddingHorizontal: '7%', paddingVertical: '5%', justifyContent: 'center'}}>
            
            <View>
            <Text style={styles.h4}>UNVEIL, INC.</Text>
            <Text style={[styles.p2, {marginTop: 5}]}>Austin TX, 2023</Text>

            <Text style={[styles.h4, {marginTop: 30}]}>"Art Investment for the Masses"</Text>
            <Text style={[styles.p2, {marginTop: 5}]}>September 2023</Text>
            <Text style={[styles.p3, {marginTop: 5, textDecorationLine: 'underline'}]}>iOS Closed Beta</Text>

            <Text style={[styles.p3, {marginTop: 50}]}>Unveil is a fractional art investment platform that enables artists to list their work and allows their fans to fractionally purchase stakes in their pieces. Unveil holds the piece and solicits acquisition offers from third party collectors. Once the piece is resold, the artist's initial supporters profit respectively to their stakes. We're a small team making art accessible— for creatives and fans alike.</Text>
            
            <Text style={[styles.p3, {marginTop: 50}]}>(585)-530-9895</Text>
            <Text style={[styles.p3, {marginTop: 5, textDecorationLine: 'underline'}]}>management@unveil.group</Text>
            </View>

          </View>

      </View>
      </MobileView>
    </>
  );
}

let styles = StyleSheet.create({
  h4: {
    fontFamily: 'Open Sans 600',
    fontWeight: 600,
    fontSize: 20
  },
  p1: {
    fontFamily: 'Arimo 400',
    fontSize: 20
  },
  p2: {
    fontFamily: 'Arimo 400',
    fontSize: 18
  },
  p3: {
    fontFamily: 'Arimo 400',
    fontSize: 16
  }
})

export default App;
