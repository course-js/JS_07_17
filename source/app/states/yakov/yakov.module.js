
'use strict';

angular

    .module('layout.yakov', [ 

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.yakov', { 
            url: '/yakov', 
            templateUrl: 'app/states/yakov/yakov.html', 
            controller: 'yakovController', 
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
