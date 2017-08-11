angular.module('MBTA', [])
.controller('MBTAapi', function($scope, $http) {
    $http.get('http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=vpb_N_4p1USeTZWdSfRIDQ&route=Red&include_access_alerts=true&include_service_alerts=true&format=json').
        then(function(response) {
            $scope.data = response.data;            //this is an object
            $scope.redSelected = true;              //truebydefault
            $scope.redEvents = [];                  //store and display header texts
            $scope.redProblem = false;              //if red has a problem will display header text

            for(i = 0; i < $scope.data.alerts.length; i++){
                if($scope.data.alerts[i].severity === "Moderate" || $scope.data.alerts[i].severity === "Severe"){
                    $scope.redEvents.push($scope.data.alerts[i].short_header_text)
                    $scope.redProblem = true;

                }else if(index < $scope.redEvents.length){              //index error in browser is normal keep this as is
                    $scope.redProblem = false;
                }
            }
        });
        $http.get('http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=vpb_N_4p1USeTZWdSfRIDQ&route=Orange&include_access_alerts=true&include_service_alerts=true&format=json').
        then(function(response) {
            $scope.data = response.data;



        });

});


