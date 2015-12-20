
'use strict'

var app = angular.module('testShops', ["ngRoute"])
.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/createshop',
    {
        templateUrl: 'App/Views/createshop.html',
        controller: 'createController'
    });

    $routeProvider.when('/createproduct',
        {
            templateUrl: 'App/Views/createproduct.html',
            controller: 'createProductController'
        })
    $routeProvider.otherwise({ redirectTo: '/' });

    //$locationProvider.html5Mode(true).hashPrefix('!');
});


app.controller('mainCtrl', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

    

    $scope.shops = dataService.data.shops;
    $scope.triggers = {
        showProducts: false
    }

    var adressArray = [];
    var center;
    for (var i = 0; i < dataService.data.shops.length; i++) {
        adressArray[i] = dataService.data.shops[i].adress;
    }
    console.log(adressArray);



    $(document).ready(function () {
        InitMap();
    });

    function InitMap() {

        var mapOption = {
            center: new google.maps.LatLng(53.8840092, 27.4548904),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOption);
        var geocoder = new google.maps.Geocoder();
        geocodeAddress(geocoder, map);
    }



    function geocodeAddress(geocoder, resultsMap) {

        for (var i = 0; i < adressArray.length; i++) {
            var address = adressArray[i];
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    }

   

        $scope.getProductList = function (id) {
            $scope.triggers.showProducts = true;
            dataService.currentShop = id;
            console.log(dataService.currentShop)
            $scope.productList = dataService.data.shops[id - 1].products;
        }

        function GetFirstArray(tags) {
            var obj = [];
            for (var i = 0; i < dataService.data.shops.length; i++) {
                obj.push(i + 1);
            }
            for (var i = 0; i < tags.length; i++) {
                tags[i].innerHTML = obj[i];
            }
        }

        $(function () {
            $("#sortable").sortable(
                {
                    containment: "parent",
                    update: function (event, ui) { GetFirstArray($("p.serialNumber")) }
                });
        })

   

    }]);