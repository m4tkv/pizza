/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/';
import {name as appName} from './src/app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
