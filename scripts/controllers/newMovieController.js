
angular.module('jmovies').controller('NewMovieController', function ($scope, $location, locationParser, flash, MovieResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.movie = $scope.movie || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The movie was created successfully.'});
            $location.path('/Movies');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        MovieResource.save($scope.movie, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Movies");
    };
});