'use strict';

var appCtrl = /*@ngInject*/ function($log, CONFIG, NgMap, uuid, Drivers, Waypoints, Tours) {
  var vm = this;
  vm.gmapsKey = CONFIG.GMAPS_API_TOKEN;
  vm.gmapsSrc = `https://maps.googleapis.com/maps/api/js?key=${vm.gmapsKey}`;
  vm.mapCenter = '1600 pennsylvania ave, washington DC';
  vm.mapZoom = '13';

  const logAngularError = $log.error;
  NgMap.getMap().then((map) => vm.map = map, logAngularError);
  Drivers.get().then((data) => vm.drivers = data, logAngularError);
  Waypoints.get().then((data) => vm.waypoints = data, logAngularError);
  Tours.get().then((data) => vm.tours = data, logAngularError);

  const updateCurrentMarkerInfo = (currentId) => {
    vm.currentMarker = vm.waypoints.find((elem) => elem.id === currentId);
  };

  vm.placeMarker = function(e) {
    const clickedLocation = e.latLng;
    let markerNewId = uuid.v4();
    let myMarker = {
      id: markerNewId,
      name: markerNewId,
      position: [clickedLocation.lat(), clickedLocation.lng()],
      visible: true,
    };
    vm.waypoints.push(myMarker);
    vm.map.panTo(clickedLocation);
  };

  vm.clickMarker = function(e) {
    console.log(['marker', this, e]);
    //updateCurrentMarkerInfo(this.id);
  };

  vm.dragEnd = function(e) {
    console.log(['marker', this, e]);
    updateCurrentMarkerInfo(this.id);
  };

}

export default appCtrl;
