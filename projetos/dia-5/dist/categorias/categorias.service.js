(function () {
    "use strict";

    angular.module('listaComprasApp')
        .service('categoriasService', categoriasService);

    categoriasService.$inject = ['$http', 'constantes', 'helperFactory'];

    function categoriasService($http, constantes, helper) {
        return {
            listar: listar,
            cadastrar: cadastrar,
            consultar: consultar,
            editar: editar,
            deletar: deletar
        }

        // #######################################

        function requisicao(_method, _url, _params) {
            return $http({
                method: _method.toUpperCase(),
                url: _url.indexOf('http://') !== -1 ?
                    _url : constantes.URL_BASE + _url,
                data: _params ? _params : {}
            }).then(function (response) {
                return response.data;
            })
                .catch(helper.sendError);
        }
        
        function listar() {return requisicao('get', '/categorias')}

        function cadastrar() {return requisicao('post', '/categorias',_param)}

        function consultar(_id) {return requisicao('get', '/categorias/'+_id)}

        function editar(_param) {return requisicao('put', '/categorias/'+_param_._id,_param)}

        function deletar(_id) {return requisicao('delete', '/categorias/'+_id)}
        
    }

})();