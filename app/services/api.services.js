(function() {
  'use strict';

  angular
    .module('chezPanisseCafeApp')
    .factory('Api', Api)

    Api.$inject= ['$http', '$httpParamSerializer']
    function Api($http, parmaSerialize){

      const BASE_URL = 'https://opentable.herokuapp.com/api';

      let handleSuccess = (resp) => resp;
      let handleErrors = (resp) => resp;

      return {
        /** @retrieve all restaurants */
        getRestaurantsWithFilters: (filters) => {
          let paramString = Object.keys(filters)
                            .reduce((str, key) => (str += `&${key}=${filters[key]}`), '');
          return $http.get(`${BASE_URL}/restaurants?${paramString.replace('&', '')}`)
          .then(handleSuccess)
          .catch(handleErrors);
        }
      }
    }
})()
