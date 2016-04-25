'use strict';

export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    postsService.getDescriptiveMetaInfo().then(postsMeta => {
        $scope.postsMeta = postsMeta;
    });
}]
