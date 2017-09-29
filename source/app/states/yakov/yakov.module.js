
'use strict';

angular

    .module('layout.yakov', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.yakov', {
            url: '/yakov',
            templateUrl: 'app/states/yakov/yakov.html',
            controller: 'homeController',
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
