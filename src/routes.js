import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
});

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Dashboard: {
    screen: DashboardStack,
  },
});

const RouteContainer = createAppContainer(AppDrawer);

export default RouteContainer;
