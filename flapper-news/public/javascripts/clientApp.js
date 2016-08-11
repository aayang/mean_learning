/**
 * Created by aaron.yang on 8/10/16.
 */

var app = angular.module('flapperNews', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/javascripts/home.html',
            controller: 'MainCtrl'
        });

        $stateProvider.state('posts', {
            url: '/posts/{id}',
            templateUrl: '/javascripts/posts.html',
            controller: 'PostsCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }]);

app.factory('postsFactory', [function(){
    var factory = {};
    factory.posts = [];

    return factory;
}]);

app.controller('MainCtrl', ['$scope', 'postsFactory',
    function($scope, postsFactory){
        $scope.posts = postsFactory.posts;
        /*
        $scope.posts = [
            {title: 'post1', upvotes: 5},
            {title: 'post2', upvotes: 6},
            {title: 'post3', upvotes: 7},
            {title: 'post4', upvotes: 8},
        ];*/

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === ''){
                return;
            }

            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: [
                    {author: 'Joe', body:'Cool post!', upvotes: 0},
                    {author: 'Bob', body:'Angular is Cool!', upvotes: 1}
                ]});

            $scope.link = '';
            $scope.title = '';
        };

        $scope.incrementUpvotes = function(post){
            post.upvotes += 1;
        }

    }]);

