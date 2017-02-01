namespace MyApp {

    export class CalculatorController {
        public result;

        addNums(a,b) {
            this.result=a+b;
        }
    }

    angular.module('MyApp').controller('CalculatorController', CalculatorController);

}
