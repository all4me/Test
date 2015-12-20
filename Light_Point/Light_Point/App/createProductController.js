app.controller('createProductController', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

    

    $scope.createProduct = function () {
        var newProduct = {
            name: $scope.productName,
            desc: $scope.productDesc
        }

        var i = dataService.currentShop;
        console.log(i)
        dataService.data.shops[i - 1].products.push(newProduct);
        $location.path('/');

    }

    $scope.doTheBack = function () {
        window.history.back();
    }

}])