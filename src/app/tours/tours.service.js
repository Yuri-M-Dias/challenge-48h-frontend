export default /*@ngInject*/ function(Restangular) {
  const toursData = Restangular.all('tours');
  return {
    get: () => toursData.getList(),
  };
}
