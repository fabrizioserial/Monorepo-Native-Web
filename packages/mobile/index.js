/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '@monorepo-native-web/app';
import {name as appName} from './app.json';
import Home from "@monorepo-native-web/app/src/screens/Home";

AppRegistry.registerComponent(appName, () => (()=> <App><Home/></App>));
