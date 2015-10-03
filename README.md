# Angular Hover Service

An AngularJS service to handle colors of links when they are changed by the user (example, with a colorpicker).


##### 1) Include the file.
```
<script src="ng-hover.js"></script>
```


##### 2) Use the service in a controller, and define some colors to be managed.
```
var app = angular.module('app', ['ngHover']);

app.module('MainController', function($scope, ngHover)
{
    $scope.link.normal = '#CCCCCC';
    $scope.link.hover = '#FFFFFF';

    ngHover.set($scope, 'linkNormal', 'link.normal');
    $scope.hover = ngHover;
});
```


##### 3) Probably, in your UI you have a colorpicker and the user can change colors.
```
<some-nice-angular-colorpicker ng-model="link.normal"></some-nice-angular-colorpicker>
<some-nice-angular-colorpicker ng-model="link.hover"></some-nice-angular-colorpicker>
```


##### 4) Use the service in a view in order to show updated colors.
```
<div ng-controller="MainController">
<a href="#" 
   ng-style="{ 'color': hover.get('linkNormal') }" 
   ng-mouseenter="hover.in('linkNormal', link.hover)" 
   ng-mouseleave="hover.out('linkNormal', link.normal)">
    A link with nice colors
</a>
<div>
```
