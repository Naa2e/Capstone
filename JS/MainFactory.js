app.factory("WorkFactory", ["$firebaseObject", "$firebaseArray"
  function($firebaseObject, $firebaseArray) {
    return function(FLM) {}

    var myDataRef = new Firebase('https://residential.firebaseio.com/');
    var FLMRef = ref.child(FLM)

    return $firebaseObject(FLMRef);
  }
  }
]);
