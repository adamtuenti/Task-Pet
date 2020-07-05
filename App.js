
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/cuenta/login.js';
import RegistroDatos from './src/cuenta/registroDatos.js';
import RegistroMascota from './src/cuenta/registroMascota.js';

import AgendarActividad from './src/calendario/agendarActividad.js';

import Home from './src/home.js';


const AppNavigator = createStackNavigator(
  {
    Home,AgendarActividad,Login, RegistroDatos,RegistroMascota, 
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
