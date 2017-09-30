
'use strict';

angular

    .module('layout.alina', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.alina', {
            url: '/alina',
            templateUrl: 'app/states/alina/alina.html',
            controller: 'alinaController',
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
