import angular from 'angular';

import drivers from './drivers.service';

angular
  .module('drivers', [])
  .service('Drivers', drivers);
