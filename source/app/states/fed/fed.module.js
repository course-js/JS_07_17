
'use strict';

angular

    .module('layout.fed', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.fed', {
            url: '/fed',
            templateUrl: 'app/states/fed/fed.html',
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
