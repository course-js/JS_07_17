
'use strict';

angular

    .module('layout.pasha', [ 

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.pasha', { 
            url: '/pasha', 
            templateUrl: 'app/states/pasha/pasha.html', 
            controller: 'pashaController', 
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
