app.controller("MainCtrl", ["$scope", "$firebaseArray", "$http",
    function($scope, $firebaseArray, $http) {
        var homesRef = new Firebase("https://residential.firebaseio.com/homes");

        // download the data from a Firebase database reference into a (pseudo read-only) array
        // all server changes are applied in realtime
        $scope.homes = $firebaseArray(homesRef);
        console.log('$scope.homes',$scope.homes)

        // create a query for the most recent 25 messages on the server
        // var query = homesRef
        var homesArray = [ ]

        // the $firebaseArray service properly handles Firebase database queries as well
        // $scope.filteredHomes = $firebaseArray(homesRef);
          $scope.homes.$loaded()
            .then(function(){
                angular.forEach($scope.homes, function(currentHome) {
                    var eventObject = {
                        title: currentHome.Site,
                        start: currentHome.Date,
                        allDay: true
                    }
                    homesArray.push(eventObject)
                });
                console.log('homesArray',homesArray)
                $('#calendar').fullCalendar({
                    events: homesArray
                });
            });



        // $('#calendar').fullCalendar({
        //     homesArray: [],
        //     defaultView: 'agendaWeek',

        //     select: function(start, end, allDay) {
        //         /*
        //             after selection user will be promted for enter title for event.
        //         */
        //         var  title = prompt('Event Title:');
        //         /*
        //             if title is enterd calendar will add title and event into fullCalendar.
        //         */
        //         if (homes) {
        //             calendar.fullCalendar('renderEvent', {
        //                     title: Site,
        //                     start: start,
        //                     end: end,
        //                     allDay: allDay
        //                 },
        //                 true // make the event "stick"
        //             );
        //         }
        //         calendar.fullCalendar();
        //     },
        //     /*
        //         editable: true allow user to edit events.
        //     */
        //     editable: false,
        //     /*
        //         events is the main option for calendar.
        //         for demo we have added predefined events in json object.
        //     */

        // });

    }
]);
