
'use strict';

angular

    .module('layout.denisT', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.denisT', {
            url: '/denisT',
            templateUrl: 'app/states/denisT/denisT.html',
            controller: 'denisTController',
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
