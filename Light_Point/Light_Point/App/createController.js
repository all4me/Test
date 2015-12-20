app.controller('createController', ['$scope', 'dataService', '$location', function ($scope, dataService, $location){

    function newId() {
        var i = dataService.data.shops.length;
        i++;
        return i;
    }

    $scope.createNewShop = function () {
        var newShop = {
            id: newId(),
            name: $scope.shopName,
            adress: $scope.shopAdress,
            mode: $scope.shopMode,
            serialNumber: newId()
        }

        dataService.data.shops.push(newShop);
        $location.path('/');

    }

    $scope.doTheBack = function () {
        window.history.back();
    }

}])