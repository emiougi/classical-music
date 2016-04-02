// クイズ用のコントローラ
myApp.controller('recommendController',['$scope', '$timeout', function($scope, $timeout) {
$.ajax({
            url: "http://tool.apps.jp.net/advertisement/get2/app_id/328/media_id/0",
            dataType: "jsonp",
            jsonpCallback: 'callback',
            success: function(feeds){
                $scope.$apply(function(){
                    $scope.recapps = feeds;
                    $scope.isFetching = false;
                    $scope.failed = false;
                });
            },
            error: function(error){
                $scope.$apply(function(){
                    $scope.failed = true;
                    $scope.isFetching = false;    
                });
            }
        });
    // 1.1.1対策
    $timeout( function() { } , 0 );
}]);