
'use strict';

angular

    .module('layout.aleksandr', [ // module назван ожидаемо

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.aleksandr', { // state назван ожидаемо
            url: '/aleksandr1', // url тоже описано ожидаемо
            templateUrl: 'app/states/aleksandr/aleksandr.html', // шаблон поключен верно
            controller: 'aleksandrController', // контроллер используеться то же самы что и для home тебе нужно сделать свой контроллер для свое страници
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
