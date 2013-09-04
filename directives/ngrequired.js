angular.module('required', [])
  .directive("required", ['$timeout', function($timeout) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        if(!element.length){
          return;
        }
        element.after('<div class="required-tick">*</div>');

        //var $element = $(element[0]),
        //  $tick = $element.next();

        //function checkInput(event, callerElement) {
        //  if ($element.val() === '') {
        //      $tick.show();
        //  } else {
        //    // Trigger NG's validity check
        //    $element.trigger('input');
        //    if ($element.hasClass('ng-invalid')) {
        //      $tick.show();
        //    } else {
        //      $tick.hide();
        //    }
        //  }
        //  if ($element !== callerElement) {
        //    $timeout(function() {
        //      scope.$broadcast('checkInput', $element);
        //    }, 2500);
        //  }
        //}
        //scope.$on('checkInput', checkInput);
        //$timeout(function() {
        //  scope.$broadcast('checkInput', $element);
        //}, 0);
      }
    }
  }
]);
