console.log(angular);
angular
  .module("filtersModule", [])
  .controller("mainCtrl", mainCtrl)
  .filter("custom", customFactoryFunction)
  .filter("reverse", reverseFilter);

mainCtrl.$inject = ["$scope", "customFilter"];
function mainCtrl($scope, customFilter) {
  $scope.inputText = "";
  $scope.title = "Custom Filters";
  $scope.length = 0;
  $scope.onChange = function () {
    $scope.length = customFilter($scope.inputText);
  };
}

function customFactoryFunction() {
  return function (input) {
    return input.length;
  };
}

function reverseFilter() {
  return function (input) {
    let ans = "";
    for (let i = input.length; i >= 0; i--) {
      ans += input.charAt(i);
    }
    return ans;
  };
}
