(function () {
    "use strict";

    angular.module('listaComprasApp')
        .directive('exemplo', exemplo);

    exemplo.$inject = [];

    function exemplo() {
        return {
            template:
                '<div class="container">' +
                '    <span>{{teste}}---{{nomeTeste}}</span>' +
                '    <br>' +
                '    <span ng-transclude></span>' +
                '</div>',
            // templateUrl: 'diretivas/alertas.tpl.html'
            replace: true,
            restrict: 'A',
            scope: {
                teste: '@teste',
                nomeTeste: '='
            },
            transclude: true,
        }
    }

})();