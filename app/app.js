'use strict';
var app = angular
    .module('app', [
  'ui.router'
]);
app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    // Home State and Nested Views
        .state('home', {
        url: '/',
        views: {
            // the main template
            '': { templateUrl: '/components/home/home.html',
                controller: 'mainController'},
            
            //sidebar
            'sidebar@home': {templateUrl: '/shared/sidebar/sidebar.html'},
                                   
/*                                    $scope.days = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
                $scope.hours = {};
                
                $scope.
                                }},*/

            
            // right view
            'right@home': {templateUrl: 'components/right/right.html'}
            
        }
        
    });
}
            
            ]);

/*closes config()*/    
 app.controller('mainController', function($scope){
  
     $scope.data = {
         "days": [{
             "name": "monday",
             'times': [{
                 "open": '9:00AM',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}]
         } , {
             "name": "tuesday",
             'times': [{
                 "open": '900',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}],
         }, {
             "name": "wednesday",
             'times': [{
                 "open": '900',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}],
         }, {
             "name": "thursday",
             'times': [{
                 "open": '900',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}],
         }, {
             "name": "friday",
             'times': [{
                 "open": '900',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}],
         }, {
             "name": "saturday",
             'times': [{
                 "open": '900',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}],
         }, {
             "name": "sunday",
             'times': [{
                 "open": '900',
                 "close": '1200'}, {
                     "open": '1300',
                     "close": '1700'}],
         }]
              
          };
$scope.text={};
     $scope.text2={};
     $scope.addTimes = function(day){
        day.times.push({
           "open": $scope.text.open, "close": $scope.text2.close}
                      );
         console.log($scope.open);
       $scope.text.open = '';
    $scope.text2.close = '';
     };

     
 });
      