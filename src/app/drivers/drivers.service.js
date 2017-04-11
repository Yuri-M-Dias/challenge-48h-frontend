export default /*@ngInject*/ function(Restangular) {
  const driversData = Restangular.all('drivers');
  return {
    get: () => driversData.getList(),
  };
}
