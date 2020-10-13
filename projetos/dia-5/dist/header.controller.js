(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['ListaComprasService', 'helperFactory'];

    function headerController(service, helper) {
        var vm = this;

        vm.go = helper.go;
        vm.logout = logout;
        vm.iniciar = iniciar;

        function iniciar() {
            vm.go();
        }

        function logout() {
            helper.setRootScope('userLogged', null);
            helper.path('/login');
        }

    }

})();