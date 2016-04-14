import routeController from './route-controller'
import postsController from './posts/posts-controller'
import aboutController from './about/about-controller'

import postsService from './posts/posts-service'

angular.module('BlogApp', [
        ngRoute,
        hcMarked
    ])
    .factory('postsService', postsService)
    .controller('routeController', routeController)
    .controller('postsController', postsController)
    .controller('aboutController', aboutController)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/posts/posts.html',
                controller: 'postsController'
            })
            .when('/about', {
                templateUrl: '/app/about/about.html',
                controller: 'aboutController'
            });
    });
