/* global process */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import 'lodash';
import 'restangular';
import ngMap from 'ngmap';
import 'angular-uuid';

import '../styles/main.less';
import 'angular-material/angular-material.css';

import config from 'app.config';

import appConfig from './app.config';
import appRoute from './app.route';
import appComponent from './app.component';

import './drivers/drivers';
import './tours/tours';
import './waypoints/waypoints';

export default angular.module('challenge-48h-frontend', [
  ngAnimate,
  ngAria,
  ngMessages,
  ngSanitize,
  ngMaterial,
  'restangular',
  uiRouter,
  ngMap,
  'angular-uuid',
  'drivers',
  'tours',
  'waypoints',
])
  .config(appConfig)
  .config(appRoute)
  .constant('CONFIG', config)
  .constant('ENVIRONNEMENT', process.env.ENV_NAME)
  .component('app', appComponent)
  .name;
