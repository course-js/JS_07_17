
'use strict';

angular

    .module('layout.fedoseev', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.fedoseev', {
            url: '/fedoseev',
            templateUrl: 'app/states/fedoseev/fedoseev.html',
            controller: 'fedoseevController',
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
