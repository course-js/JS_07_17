
'use strict';

angular

    .module('layout.shama', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.shama', {
            url: '/shama',
            templateUrl: 'app/states/shama/shama.html',
            controller: 'shamaController',
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
