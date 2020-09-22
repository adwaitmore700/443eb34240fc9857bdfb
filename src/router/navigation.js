import * as React from 'react';

import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {PAGE_CONSTANTS} from '../utils/constants';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PAGE_CONSTANTS.HOME_PAGE}>
                <Stack.Screen name={PAGE_CONSTANTS.HOME_PAGE} component={HomeScreen} options={{
                    title: 'Posts',
                    headerStyle: {
                        backgroundColor: 'orange'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf:'center',
                        fontSize:24
                    }
                }} />
                <Stack.Screen name={PAGE_CONSTANTS.DETAILS_PAGE} component={DetailsScreen} options={{
                    title: 'Post Details',
                    headerStyle: {
                        backgroundColor: 'orange'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf:'center',
                        fontSize:24
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation