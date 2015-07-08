app.controller("MainCtrl", ["$scope", "$firebaseArray", "$http",
    function($scope, $firebaseArray, $http) {
        var homesRef = new Firebase("https://residential.firebaseio.com/homes");

        // download the data from a Firebase database reference into a (pseudo read-only) array
        // all server changes are applied in realtime
        $scope.homes = $firebaseArray(homesRef);
        console.log('$scope.homes', $scope.homes)

        $scope.sortType = 'Site';
        $scope.sortReverse = false;
        $scope.searchSite = ' ';
        console.log('$scope.sortType', $scope.sortType)


        var homesArray = []

        // the $firebaseArray service properly handles Firebase database queries as well
        // $scope.filteredHomes = $firebaseArray(homesRef);

        // $scope.homes.$loaded()
        //     .then(function() {
        //         angular.forEach($scope.homes, function(currentHome) {
        //             var eventObject = {
        //                 title: currentHome.Site,
        //                 start: currentHome.Date,
        //                 allDay: true
        //             }
        //             homesArray.push(eventObject)
        //         });

        //         $('#calendar').fullCalendar({
        //             header: {
        //               left: 'prev,next today',
        //               center: 'title',
        //               right: 'month,agendaWeek,agendaDay'
        //             },
        //             defaultDate: '2015-06-01',
        //             defaultView: 'agendaWeek',
        //             editable: true,
        //             events: homesArray
        //         });
        //     });
    }
]);
