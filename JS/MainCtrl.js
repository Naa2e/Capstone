
app.controller("MainCtrl", ["$scope", "$firebaseArray", "$http",
  function($scope, $firebaseArray, $http) {
    var homesRef = new Firebase("https://residential.firebaseio.com/homes");

    // download the data from a Firebase database reference into a (pseudo read-only) array
    // all server changes are applied in realtime
    $scope.homes = $firebaseArray(homesRef);

    // create a query for the most recent 25 messages on the server
    var query = homesRef.orderByChild("timestamp").limitToLast(25);

    // the $firebaseArray service properly handles Firebase database queries as well
    $scope.filteredHomes = $firebaseArray(query);

    $('#calendar').fullCalendar({
         defaultView: 'agendaWeek'
    })

  }
]);


