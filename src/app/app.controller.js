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

  const noop = () => {};
  // Actual implementation with restangular
  vm.addWaypoint = () => {
    //vm.waypoints.splice(vm.waypoints.indexOf(waypoint), 1);
  };
  vm.deleteWaypoint = (waypoint) => {
    vm.waypoints.splice(vm.waypoints.indexOf(waypoint), 1);
  };
  vm.removeWaypointFromTour = noop;
  vm.addDriverToTour = noop;
  vm.deleteTour = (tour) => {
    vm.tours.splice(vm.tours.indexOf(waypoint), 1);
  };

  vm.placeMarker = function(e) {
    if(!vm.adding) {

    }
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
    updateCurrentMarkerInfo(this.id);
  };

  vm.dragEnd = function(e, waypoint) {
    updateCurrentMarkerInfo(waypoint.id);
    const location = e.latLng;
    waypoint.position = [location.lat(), location.lng()];
  };

}

export default appCtrl;
