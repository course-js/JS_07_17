
'use strict';

angular

    .module('layout.aleksandrForm', [ 
    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.aleksandrForm', { 
            url: '/aleksandrForm', 
            templateUrl: 'app/states/aleksandr/aleksandrForm.html', 
            controller: 'aleksandrFormController', 
            
            resolve: {
                // resolve это убъект уникальных для этой страници зависимостей
                // имена полей обьектов могут быть затянуты в контроллер твоей страници как зависимость
                // обычно используеться для выполнения важных для страници запросов
                // без которых страницу будет невозможно нарисовать
                fromRoot: function ( user ) {
                    return {user: user, prepered: true};
                }
            }
        });
    });
