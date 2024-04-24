import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MachineSelection from '../../../pages/MachineSelection';

type OperatorStackScreens = {
  OperatorFlowFirst: undefined;
};

const { Screen, Navigator } = createStackNavigator<OperatorStackScreens>();

const OperatorFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="OperatorFlowFirst" component={MachineSelection} />
  </Navigator>
);

export default OperatorFlowStack;