'use strict';

var appCtrl = /*@ngInject*/ function($scope, CONFIG) {
  var vm = this;
  vm.welcomeMessage = 'Welcome to the front-end challenge!';
  vm.gmapsKey = CONFIG.GMAPS_API_TOKEN;
  vm.welp = '';
}

export default appCtrl;
