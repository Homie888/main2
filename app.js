angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    // Als url niet bestaat, ga naar /
    $urlRouterProvider.otherwise("/");

    //Verschillende states
    $stateProvider

    //Main state
    .state('main', {
      url: "/",
      templateUrl: "main.html",
      controller: "MainController"
    })

    //Product state
    .state('product', {
      url: "/product/:productId",
      templateUrl: "product.html",
      controller: "ProductController"
    })
  })


.controller('MainController', function($scope, $http){
  
  //Functie om zoek data te halen van url
  $scope.fetch = function() {
    $http.get("http://test.api.count3r.nl/product?skey=" + $scope.search)
    .then(function(response){
      console.log(response);
      $scope.details = response.data; });
  }
})


.controller('ProductController', function($scope, $http, $stateParams){

  //Haalt product data op van specifieke product, dmv id
  $http.get('http://test.api.count3r.nl/product/'+$stateParams.productId,{
    params:{
      'include':'media,related'
    }
  }).then(function(res) {
    $scope.product = res.data;
  });
});
