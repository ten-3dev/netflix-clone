import React, { useEffect } from 'react';
import Navigation from './src/Navigations/StackNavigation/index';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return(
    <>
      <Navigation />
    </>
  )
}

export default App;
