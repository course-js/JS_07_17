
'use strict';

angular

    .module('layout.fedoseev_form', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.fedoseev_form', {
            url: '/fedoseev_form',
            templateUrl: 'app/states/fedoseev_form/fedoseev_form.html',
            controller: 'fedoseev_formController',
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
