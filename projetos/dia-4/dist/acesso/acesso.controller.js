(function(){
    "use strict";

    angular.module('listaComprasApp')
    .controller('AcessoController', acessoController);

    acessoController.$inject = ['HelperFactory','ListaComprasService'];

    function acessoController(helperFactory, service) {
        var vm = this;
        vm.logado = false;
        vm.cadastrar = register;


        vm.logar = logar;
        function logar() {
            return service.logar(vm.login.username,vm.login.password)
            .then(function (_resp) {
                if(_resp.error){
                    helperFactory.addMsg(_resp, 'danger')
                }else{
                    helperFactory.addMsg(_resp.message, 'success')
                    helperFactory.setRootScope('userLogged', _resp.userLogged);
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
}())


