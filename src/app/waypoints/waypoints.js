import angular from 'angular';

import waypoints from './waypoints.service';

angular
  .module('waypoints', [])
  .service('Waypoints', waypoints);
