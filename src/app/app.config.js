/**
 * Application configuration.
 */
export default function (ENVIRONNEMENT, $compileProvider, $locationProvider, $sceDelegateProvider, RestangularProvider) {
  'ngInject';

  // Reference: https://docs.angularjs.org/api/ng/provider/$locationProvider#html5Mode
  $locationProvider.html5Mode(true);

  // Reference : http://blog.thoughtram.io/angularjs/2014/12/22/exploring-angular-1.3-disabling-debug-info.html
  $compileProvider.debugInfoEnabled(ENVIRONNEMENT !== 'prod' && ENVIRONNEMENT !== 'production');

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://maps.googleapis.com/maps/api/**',
  ]);

  // Just as an example
  RestangularProvider.setRequestSuffix('.json');

}
