(function(){
    "use strict";

    angular.module('listaComprasApp')
    .controller('HeaderController', headerController);

    headerController.$inject = ['$location','ListaComprasService', 'HelperFactory'];

    function headerController($location,service,helper) {
        var vm = this;
        vm.go = go;
        vm.logout = logout;
        function go(_path) {
            var path = _path ? _path : $location.path()
            if(path == '/login' || path == '/register'){
                $location.path(path);
                setPage(_path);
            } else {
                isLoggedIn(path)
            }
        }

        function isLoggedIn(_path) {
            if(helper.getRootScope('userLogged')){
                $location.path(_path);
                setPage(_path);
            }
            else{
                $location.path('/login')
                helper.addMsg("Você não pode acessar essa pagina",'danger')
                setPage(_path);
            }

        }

        function setPage(_path) {
            helper.setRootScope('page', $location.path().substring(1));
        }

        function logout() {
            helper.setRootScope('userLoggedIn', null)
            $location.path('/login')
        }
    }

}())


