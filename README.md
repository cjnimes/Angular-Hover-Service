# ngHover: Angular Hover Service

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
    // These values could be coming from a remote database.
    $scope.link.normal.text = '#CCCCCC';
    $scope.link.hover.text = '#FFFFFF';
    
    // Set up service with the value to be updated when mouse is over the link.
    ngHover.set($scope, 'linkNormalText', 'link.normal.text');
    
    // Service will be used also in the view.
    $scope.hover = ngHover;
});
```


##### 3) Probably, in your UI you have a colorpicker and the user can change colors.
```
<some-nice-angular-colorpicker ng-model="link.normal.text"></some-nice-angular-colorpicker>
<some-nice-angular-colorpicker ng-model="link.hover.text"></some-nice-angular-colorpicker>
```


##### 4) Use the service in the view in order to show updated colors.
```
<div ng-controller="MainController">
<a href="#" 
   ng-style="{ 'color': hover.get('linkNormalText') }" 
   ng-mouseenter="hover.in('linkNormalText', link.hover.text)" 
   ng-mouseleave="hover.out('linkNormalText', link.normal.text)">
    A link with nice colors
</a>
<div>
```

##### 5) You can handle any CSS property:
Controller:
```
$scope.link.normal.background = '#FF0000';
$scope.link.normal.border = '#00FF00';
$scope.link.hover.background = '#0000FF';
$scope.link.hover.border = '#FF00FF';

ngHover.set($scope, 'linkNormalBackground', 'link.normal.background');
ngHover.set($scope, 'linkNormalBorder', 'link.normal.border');
```
View:
```
<a href="#" 
   ng-style="{ 'color': hover.get('linkNormalText'), 'background-color': hover.get('linkNormalBackground'), 'border-color': hover.get('linkNormalBorder') }" 
   ng-mouseenter="hover.in('linkNormalText', link.hover.text); hover.in('linkNormalBackground', link.hover.background); hover.in('linkNormalBorder', link.hover.border);" 
   ng-mouseleave="hover.out('linkNormalText', link.normal.text), hover.out('linkNormalBackground', link.normal.background), hover.out('linkNormalBorder', link.normal.border)">
    A link with nice colors
</a>
```

## To do
- Rewrite in() and out() functions to avoid the second argument. This value could be established when the service is configured.
- Avoid multiple calls to in() and out() when several CSS properties are used.
 
### Bugs? Comments?
Just tell me! I'm an AngularJS new user, coming from Javascript an jQuery. Any comments would be appreciated!

Regards, Cristian.
