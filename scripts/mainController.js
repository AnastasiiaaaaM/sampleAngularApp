angular.module("favorites")
    .controller("mainController", function($scope, $http, localStorageService){
       $scope.test = "test2";
        $http.get("initialList.json").success(function(data){

            if(!localStorageService.get("favoritesList")){
                localStorageService.set("favoritesList", data);
                $scope.favoritesList = data;
            } else {
                $scope.favoritesList = localStorageService.get("favoritesList");
            }

        });


        $scope.add = function(data){
            $scope.favoritesList.push(data);
            localStorageService.set("favoritesList", $scope.favoritesList);
        };

        $scope.removeItem = function(item){
            var currentIndex = $scope.favoritesList.indexOf(item);
            if(currentIndex!==-1){
                $scope.favoritesList.splice(currentIndex, 1);
                localStorageService.set("favoritesList", $scope.favoritesList);
            }
        }
});