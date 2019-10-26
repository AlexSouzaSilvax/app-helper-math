import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Principal from './pages/Principal';
import CalculoPA from './pages/CalculoPA';
import CalculoPG from './pages/CalculoPG';

const Routes = createAppContainer(
    createSwitchNavigator({
        //Principal,
        CalculoPA,
        CalculoPG,
    })
);

export default Routes;