angular.module('MBTA', [])
.controller('MBTAapi', function($scope, $http) {

    //functions for selecting different routes
  $scope.selectRed =  function (){
        $scope.redSelected = true;
        $scope.blueSelected = false;
        $scope.orangeSelected = false;
    }
   $scope.selectBlue =  function (){
        $scope.redSelected = false;
        $scope.blueSelected = true;
        $scope.orangeSelected = false;
    }
    $scope.selectOrange = function (){
        $scope.redSelected = false;
        $scope.blueSelected = false;
        $scope.orangeSelected = true;
    }
    //API CALLS

    $http.get('http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=vpb_N_4p1USeTZWdSfRIDQ&route=Red&include_access_alerts=true&include_service_alerts=true&format=json').
        then(function(response) {
            $scope.redData = response.data;            //this is an object
            $scope.redSelected = true;              //truebydefault
            $scope.redEvents = [];                  //store and display header texts
            $scope.redProblem = false;              //if red has a problem will display header text

            for(i = 0; i < $scope.redData.alerts.length; i++){
                if($scope.redData.alerts[i].severity === "Minor" || $scope.redData.alerts[i].severity === "Severe"){
                    $scope.redEvents.push($scope.redData.alerts[i].short_header_text)
                    $scope.redProblem = true;

                }else if(index < $scope.redEvents.length){              //index error in browser is normal keep this as is
                    $scope.redProblem = false;
                }
            }
        });
        $http.get('http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=vpb_N_4p1USeTZWdSfRIDQ&route=Orange&include_access_alerts=true&include_service_alerts=true&format=json').
        then(function(response) {
            $scope.orangeData = response.data;
            $scope.orangeSelected = false;
            $scope.orangeEvents = [];
            $scope.orangeProblem = false;

            for(i = 0; i < $scope.orangeData.alerts.length; i++){
                if($scope.orangeData.alerts[i].severity === "Moderate" || $scope.orangeData.alerts[i].severity === "Severe"){
                    $scope.orangeEvents.push($scope.orangeData.alerts[i].short_header_text)
                    $scope.orangeProblem = true;

                }else if(index < $scope.orangeEvents.length){              //index error in browser is normal keep this as is
                    $scope.orangeProblem = false;
                }
            }

        });
        $http.get('http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=vpb_N_4p1USeTZWdSfRIDQ&route=blue&include_access_alerts=true&include_service_alerts=true&format=json').
        then(function(response){
            $scope.blueData = response.data;
            $scope.blueSelected = false;
            $scope.blueEvents = [];
            $scope.blueProblem = false;

            for(i = 0; i < $scope.blueData.alerts.length; i++){
                if($scope.blueData.alerts[i].severity === "Moderate" || $scope.blueData.alerts[i].severity === "Severe"){
                    $scope.blueEvents.push($scope.blueData.alerts[i].short_header_text)
                    $scope.blueProblem = true;

                }else if(index < $scope.blueEvents.length){              //index error in browser is normal keep this as is
                    $scope.blueProblem = false;
                }
            }
        });
        //END API CALLS

        
});

    //button highlight
    $('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});