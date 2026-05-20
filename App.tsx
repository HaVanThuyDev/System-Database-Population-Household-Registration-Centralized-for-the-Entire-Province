import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'BeVietnamPro-Light'    : require('./src/assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf'),
    'BeVietnamPro-Regular'  : require('./src/assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf'),
    'BeVietnamPro-Medium'   : require('./src/assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf'),
    'BeVietnamPro-SemiBold' : require('./src/assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf'),
    'BeVietnamPro-Bold'     : require('./src/assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf'),
    'BeVietnamPro-ExtraBold': require('./src/assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;