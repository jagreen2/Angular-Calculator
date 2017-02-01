var MyApp;
(function (MyApp) {
    var CalculatorController = (function () {
        function CalculatorController() {
        }
        CalculatorController.prototype.addNums = function (a, b) {
            this.result = a + b;
        };
        return CalculatorController;
    }());
    MyApp.CalculatorController = CalculatorController;
    angular.module('MyApp').controller('CalculatorController', CalculatorController);
})(MyApp || (MyApp = {}));
