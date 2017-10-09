
'use strict';

angular

    .module('layout.nakhaev')

    .controller('nakhaevController', function ( $scope, $log, fromRoot, toastr ) {

        var vm = $scope.vm = {
            hello: function(data) {
                console.log(data);
                toastr.info( data.item.description, data.item.name );
            },
            connections: [
                {
                    rank: 1,
                    name: 'Bower',
                    logo: 'https://libraries.io/assets/bower/bower-2b966bdccce8fcfcfb81cc75b7b113b01c311bc508413961dc189ff75b1b637c.png',
                    description: 'Manages all these things for you.',
                    url: 'https://gulp.readme.io/docs'
                },
                {
                    rank: 2,
                    name: 'Gulp',
                    logo: 'http://cloud.atechmedia.com/blog/finding-a-frontend-workflow-isnt-easy/gulp.png',
                    description: 'Automate and enhance your workflow.',
                    url: 'https://gulp.readme.io/docs'
                },
                {
                    rank: 3,
                    name: 'Angular',
                    description: 'HTML enhanced for web apps!',
                    url: 'https://docs.angularjs.org/api',
                    logo: 'https://ru.code-maven.com/img/angularjs.png',
                },
                {
                    rank: 4,
                    name: 'JQuery',
                    description: 'DOM Traversal and Manipulation',
                    url: 'https://api.jquery.com/',
                    logo: 'http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif',
                },
                {
                    rank: 5,
                    name: 'Lodash',
                    description: 'A modern JavaScript utility library.',
                    url: 'https://lodash.com/docs/4.17.4',
                    logo: 'https://cdn.worldvectorlogo.com/logos/lodash.svg',
                },
                {
                    rank: 6,
                    name: 'Moment',
                    description: 'Parse, validate and manipulate dates.',
                    url: 'http://momentjs.com/docs/',
                    logo: 'http://logo.kenh.net/logo/momentjs.svg.png',
                },
                {
                    rank: 7,
                    name: 'Bootstrap',
                    description: 'Designed for everyone, everywhere.',
                    url: 'http://getbootstrap.com/',
                    logo: 'http://getbootstrap.com/assets/img/bootstrap-stack.png',
                },
                {
                    rank: 8,
                    name: 'angular-bootstrap',
                    description: 'Bootstrap components written in pure AngularJS.',
                    url: 'https://angular-ui.github.io/bootstrap/',
                    logo: 'https://raw.githubusercontent.com/angular-ui/angular-ui.github.com/master/logo/UI_Shield_Bootstrap.png',
                },
                {
                    rank: 9,
                    name: 'font-awesome',
                    description: 'Font Awesome gives you scalable vector icons.',
                    url: 'http://fontawesome.io/',
                    logo: 'https://www.vectorlogo.zone/logos/font-awesome/font-awesome-card.png',
                },
                {
                    rank: 10,
                    name: 'angular-ui-router',
                    description: 'Easy way make application states.',
                    url: 'https://github.com/angular-ui/ui-router',
                    logo: 'https://avatars2.githubusercontent.com/u/1530011?v=4&s=400',
                },
                {
                    rank: 11,
                    name: 'restangular',
                    description: 'Easy way make application requests.',
                    url: 'https://github.com/mgonto/restangular',
                    logo: 'https://ru.code-maven.com/img/angularjs.png',
                },
                {
                    rank: 11,
                    name: 'PACE',
                    description: 'Automatic page load progress bar.',
                    url: 'http://github.hubspot.com/pace/docs/welcome/',
                    logo: 'data:image/png;base64,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',
                },
                {
                    rank: 12,
                    name: 'angular-toastr',
                    description: 'Toastr is a angular library for non-blocking notifications',
                    url: 'https://foxandxss.github.io/angular-toastr/',
                    logo: 'http://toast-js.com/dist/imgs/logos/logo-vertical.png',
                }
            ]
        };

    });
