export default /*@ngInject*/ function(Restangular) {
  const waypointsData = Restangular.all('waypoints');
  return {
    get: () => waypointsData.getList(),
  };
}
