import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import thunk from "redux-thunk";
import rootReducer from './src/store/reducers/reducers';
import Catelog from './src/views/catelog';
import PhoneView from './src/views/phoneView';


const middlewares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))


const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="catelog" component={Catelog} />
          <Stack.Screen name="itemView" component={PhoneView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
