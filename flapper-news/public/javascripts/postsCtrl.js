/**
 * Created by aaron.yang on 8/10/16.
 */

app.controller('PostsCtrl', ['$scope', '$stateParams', 'postsFactory',
    function($scope, $stateParams, postsFactory){
        $scope.post = postsFactory.posts[$stateParams.id];

        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };

    }]);