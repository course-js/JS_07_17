
'use strict';

angular

    .module('layout.nakhaev', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.nakhaev', {
            url: '/nakhaev',
            templateUrl: 'app/states/nakhaev/nakhaev.html',
            controller: 'nakhaevController',
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
