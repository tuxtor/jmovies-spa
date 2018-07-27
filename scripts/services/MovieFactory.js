angular.module('jmovies').factory('MovieResource', function($resource){
    var resource = $resource('rest/movies/:MovieId',{MovieId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});