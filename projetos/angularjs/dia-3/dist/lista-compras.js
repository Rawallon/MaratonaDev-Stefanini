(function(){
    "use strict";

    angular.module('listaTarefaApp',[]);
    
    angular.module('listaTarefaApp')
    .controller('ListaTarefaController', listaTarefaController);

    listaTarefaController.$inject = [];

    function listaTarefaController() {
        var vm = this;
        vm.logado = false;
        vm.validar = false;
        vm.register = false;
        vm.listaMensagens = [
            {text: 'Faça seu login!', tipo:'success'},
            {text: 'Faça seu login!', tipo:'success'}
        ]
    }
}())


