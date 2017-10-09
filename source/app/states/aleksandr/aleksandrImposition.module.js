
'use strict';

angular

    .module('layout.aleksandrImposition', [ // module назван ожидаемо

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.aleksandrImposition', { // state назван ожидаемо
            url: '/aleksandrImposition', // url тоже описано ожидаемо
            templateUrl: 'app/states/aleksandr/aleksandrImposition.html', // шаблон поключен верно
            controller: 'aleksandrImpositionController', // контроллер используеться то же самы что и для home тебе нужно сделать свой контроллер для свое страници
            /**
            *
            */
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
