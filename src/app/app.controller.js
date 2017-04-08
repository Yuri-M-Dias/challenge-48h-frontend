'use strict';

var appCtrl = /*@ngInject*/ function($scope, CONFIG, NgMap) {
  var vm = this;
  vm.welcomeMessage = 'Welcome to the front-end challenge!';
  vm.gmapsKey = CONFIG.GMAPS_API_TOKEN;
  vm.welp = '';
  vm.gmapsSrc = `https://maps.googleapis.com/maps/api/js?key=${vm.gmapsKey}`;
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
}

export default appCtrl;
