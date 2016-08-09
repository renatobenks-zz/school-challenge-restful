'use strict';

angular
  .module('consumer')
  .constant('MY_API',
    [
      {
        'config': {
          'urlBase': 'localhost',
          'url': '/api/v1/',
          'port': ':5000'
        }
      }, {
        'endpoints': {
          'issues': 'issues',
          'questions': 'questions',
          'question': 'question'
        }
      }
    ]
  )
  .factory('dataservice', dataservice);

function dataservice() {

}
