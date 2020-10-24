(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('MensagensAlertasController', mensagensAlertasController);

    mensagensAlertasController.$inject = ['$rootScope'];

    function mensagensAlertasController($rootScope) {
        var vm = this;

        vm.teste = 'um texto qualquer';

        vm.ctrl = {
            funcao: funcao
        }

        function funcao() {
            console.log('Função do meu componente');
            console.log('listaMensagens', $rootScope.listaMensagens);
        }

    }

})();