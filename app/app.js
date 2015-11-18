'use strict';

// Declare app level module which depends on views, and components
var coffeeApp = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap'
]);
coffeeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/coffees', {
        templateUrl: 'coffees.html',
        controller: 'coffeesCtrl'
      }).
	  when('/coffees/:id', {
        templateUrl: 'reviews.html',
        controller: 'reviewsCtrl'
      }).
      otherwise({
        redirectTo: '/coffees'
      });
  }]);
coffeeApp.run(function($rootScope) {
    $rootScope.coffees = [  
   {  
      'id':1,
      'brand':"Average Andy's Coffee",
      'name':'Regular Coffee',
      'country':'Denmark',
      'reviews':[  
         {  
            'rating':3,
            'comment':"Could've been crispier",
            'reviewer':"Chris P. Bacon"
         }
      ]
   },
   {  
      'id':2,
      'brand':"Jimmy's Coffee",
      'name':'Mocha',
      'country':'America',
      'reviews':[  
         {  
            'rating':10,
            'comment':'What everyone should drink in the morning!',
            'reviewer':'Earl Lee Riser'
         },
         {  
            'rating':10,
            'comment':'A genius of everything coffee',
            'reviewer':'Bob'
         }
      ]
   },
   {  
      'id':3,
      'brand':"We Did Our Best",
      'name':'Latte',
      'country':'France',
      'reviews':[  
         {  
            'rating':1,
            'comment':" a 'latte' yuckiness.",
            'reviewer':'Tim Burr'
         },
         {  
            'rating':1,
            'comment':'Is this even coffee?',
            'reviewer':'Sue Flay'
         },
         {  
            'rating':1,
            'comment':'The grossest thing I have ever had.',
            'reviewer':'Myles Long'
         },
         {  
            'rating':5,
            'comment':'I dont know what the fuss is about, i dont think its too bad!',
            'reviewer':'Sara Bellum'
         }
      ]
   },
   {  
      'id':4,
      'brand':"Jimmy's Special Coffee",
      'name':'Americano',
      'country':'America',
      'reviews':[  
         {  
            'rating':10,
            'comment':'If I could rate it higher, I would!',
            'reviewer':'Justin Case'
         },
         {  
            'rating':10,
            'comment':'He does it again!',
            'reviewer':'Eileen Dover'
         }
      ]
   }
];
})
coffeeApp.controller('coffeesCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	//$scope.coffees = $rootScope.coffees;
}]);
coffeeApp.controller('reviewsCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.selected = $rootScope.coffees[parseInt($routeParams.id)-1];
	
	$scope.max = 10;
	$scope.isReadonly = true;
  
	$scope.ratingStates = [
	  {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	  {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	  {stateOn: 'glyphicon-heart'},
	  {stateOff: 'glyphicon-off'}
	];
}]);