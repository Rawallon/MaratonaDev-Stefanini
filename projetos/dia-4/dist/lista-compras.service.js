(function () {
  "use strict";

  angular
    .module("listaComprasApp")
    .service("ListaComprasService", listaComprasService);

  listaComprasService.$inject = ["$http", "constantes", "HelperFactory"];

  function listaComprasService($http, constantes, helper) {
    return {
      logar: logar,
      register: register
    };
    function logar(_params) {
      return $http
        .post(constantes.URL_BASE + "/login", _params)
        .then(function (resp) {
          console.log(resp);
          return resp.data;
        })
        .catch(function (error) {
          return { error: true, msg: error.data.message };
        });
    }

    function register(_params) {
        return $http.post(constantes.URL_BASE + '/register', _params)
            .then(function (response) {
                return response.data;
            })
            .catch(helper.sendError);
    }

  }
})();
