(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('AcessoController', acessoController);

    acessoController.$inject = ['helperFactory', 'ListaComprasService'];

    function acessoController(helper, service) {
        var vm = this;

        vm.go = helper.go;
        vm.logar = logar;
        vm.cadastrar = register;

        function logar() {
            return service.logar(vm.login)
                .then(function (_resp) {
                    if (_resp.error) {
                        helper.addMsg(_resp.msg, 'danger');
                    } else {
                        helper.setRootScope('userLogged', _resp.userLogged);
                        helper.path('/home');
                        helper.addMsg(_resp.message, 'success');
                    }
                });
        }

        function register() {
            var newUser = {
                name: vm.user.nome,
                email: vm.user.email,
                username: vm.user.username,
                password: vm.user.password,
            };
            return service.register(newUser)
                .then(tratarRes);

            function tratarRes(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    helper.path('/home');
                    helper.setRootScope('userLogged', _resp.userLogged);
                }

            }
        }

    }

})();