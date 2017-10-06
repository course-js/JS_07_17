
'use strict';

angular

    .module('layout.vyshkevich', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.vyshkevich', {
            url: '/vyshkevich',
            templateUrl: 'app/states/vyshkevich/vyshkevich.html',
            controller: 'vyshkevichController',
            /**
            *
            */
            resolve: {
                // get and prepere user from root
                fromRoot: function ( user ) {
                    return {user: user, prepered: true};
                }
            }
        });
    });

    /* Controllers */

    // angular.module('myApp.controllers', []).
    //   .controller('MyCtrl1', ['$scope', function($scope) {
    //     $scope.formInfo = {};
    //     $scope.saveData = function() {
    //
    //     };
    //   }])
    //   .controller('MyCtrl2', [function() {
    //
    //   }]);
