import React from 'react';

import {useFonts}  from "expo-font";
import {Nunito_600SemiBold, Nunito_700Bold,Nunito_800ExtraBold}  from "@expo-google-fonts/nunito";

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold,
    Nunito_800ExtraBold
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <Routes/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   calloutContainer: {
//     width: 168,
//     height: 46,
//     paddingHorizontal: 16,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 16,
//     justifyContent: 'center',
//   },

//   calloutText: {
//     fontFamily: 'Nunito_700Bold',
//     color: '#8889a5',
//     fontSize: 14
//   },
//   footer: {
//     position: 'absolute',
//     left: 24,
//     right: 24,
//     bottom: 32,

//     backgroundColor: '#FFF',
//     borderRadius: 20,
//     height: 56,
//     paddingLeft: 24,

//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//     elevation:3
//   },
//   footerText: {
//     fontFamily: 'Nunito_700Bold',
//     color: '#8fa7b3'
//   },
//   createOrphanageButton: {
//     width:56,
//     height:56,
//     backgroundColor:'#15c3d6',
//     borderRadius:20,

//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });
