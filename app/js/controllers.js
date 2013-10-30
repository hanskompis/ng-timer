'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {

  	$('#single').toggleClass('active', true);
  	$('#tabata').toggleClass('active', false);

    $scope.seconds = 30;


	  var clock = $('.clock').FlipClock($scope.seconds,{
        clockFace: 'MinuteCounter',
        autoStart: false, // auto start
        countdown: true, // true = countdown, false = count up
    });

    $scope.set = function() {
      console.log($scope.seconds);
      clock.stop();
      clock.setTime($scope.seconds);        
    };

    $scope.start = function() {
      clock.start();
    }

    $scope.stop = function() {
      clock.stop();
    }

  }])
  .controller('MyCtrl2', [function() {

  	$('#tabata').toggleClass('active', true);
  	$('#single').toggleClass('active', false);
  }]);