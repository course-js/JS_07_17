
'use strict';

angular

    .module('layout.dima', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.dima', {
            url: '/dima',
            templateUrl: 'app/states/dima/dima.html',
            controller: 'dimaController',
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
