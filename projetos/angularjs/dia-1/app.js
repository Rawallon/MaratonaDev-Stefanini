(function () {
  "use strict";

  angular
  .module("app", [])
  .controller("controlador", function ($scope) {
      $scope.nome = 'Texto!';
  })
  .controller("contador", function ($scope) {
      $scope.numero = 10;
  });
})();
