import angular from 'angular';

import tours from './tours.service';

angular
  .module('tours', [])
  .service('Tours', tours);
