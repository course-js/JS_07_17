
'use strict';

angular

    .module('layout.Artem', [ 

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.Artem', { 
            url: '/Artem', 
            templateUrl: 'app/states/Artem/Artem.html', 
            controller: 'ArtemController', 
            /**
            *
            */
            resolve: {
                // resolve is an object, unique for that page dependencies
                // the names of objects fields can be pulled into controller
                // usually used to execution of important requests on that page, 
                // without which the page cannot be draw
                fromRoot: function ( user ) {
                    return {user: user, prepered: true};
                }
            }
        });
    });
