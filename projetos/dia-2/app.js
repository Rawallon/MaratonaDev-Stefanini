(function () {
  "use strict";

  angular.module("listaDeTarefasApp", []);

  angular
    .module("listaDeTarefasApp", [])
    .controller("listaDeTarefasController", listaDeTarefasController);
  listaDeTarefasController.$inject = ["$scope"];
  function listaDeTarefasController($scope) {
    var vm = this;
    vm.tarefas = [
      { texto: "Aprender AngularJS", feito: true },
      { texto: "Fazer um app com AngularJS", feito: false },
    ];

    vm.restam = () =>
      vm.tarefas.filter((el) => el.feito == true).length;
    vm.addTarefa = () => {
      vm.tarefas.push({ texto: vm.titulotarefa, feito: false });
      vm.titulotarefa = "";
    };
    vm.apagar = () => vm.tarefas = vm.tarefas.filter(el => el.feito == false);

  }
})();
