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
                                   
            
            // right view
            'right@home': {templateUrl: 'components/right/right.html'}
            
        }
        
    });
}
            
            ]); /*closes config()*/  

  
 app.controller('mainController', function($scope){
  
     /*Starter Data*/
     $scope.data = {
         "days": [{
             "name": "monday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}]
         } , {
             "name": "tuesday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}],
         }, {
             "name": "wednesday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}],
         }, {
             "name": "thursday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}],
         }, {
             "name": "friday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}],
         }, {
             "name": "saturday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}],
         }, {
             "name": "sunday",
             'times': [{
                 "open": '1970-01-01T14:00:00.000Z',
                 "close": '1970-01-01T17:00:00.000Z'}, {
                     "open": '1970-01-01T18:00:00.000Z',
                     "close": '1970-01-01T22:00:00.000Z'}],
         }]
              
          };
     $scope.text={};
     $scope.text2={};
     
     /*function to add times*/
     $scope.addTimes = function(day){
         var open = $scope.text.open;
         var close = $scope.text2.close;
         /*check if close date is after open date*/
         if (close < open){
             console.log("error");
         }else{
        day.times.push({
           "open": open, "close": close}
                      );
       $scope.text.open = '';
    $scope.text2.close = '';
     }

     };
 });
      