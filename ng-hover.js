/**
 * Service to handle changes on CSS values when mouse is moving over a link.
 */
app.service('ngHover', function()
{
    var hover = {};

    /**
     * Set a CSS value and watch its changes.
     * Used in the controller to configure the values that will be showed in the view.
     * @param {object} $scope
     * @param {string} id. String used to identify every watched value.
     * @param {string} variable. Name of the $scope member to be watched.
     * @param {string} value Optional. If not present, the value is taken from the scope using "variable" argument.
     */
    this.set = function($scope, id, variable, value)
    {
        if (typeof value === 'undefined') {
            hover[id] = $scope.$eval(variable);
        } else {
            hover[id] = value;
        }
        
        $scope.$watch(variable, function(newValue)
        {
            hover[id] = newValue;
        });
    };

    /**
     * Get a CSS value.
     * Used in the view to show current values.
     * @param {string} id
     * @returns {string} CSS value
     */
    this.get = function(id)
    {
        return hover[id];
    };
    
    /**
     * Change current CSS value when mouse is over the link.
     * Used in the view as a handler of ng-mouseenter.
     * @param {string} id
     * @param {string} CSS value
     */
    this.in = function(id, css)
    {
        hover[id] = css;
    };
    
    /**
     * Change current CSS value when mouse is not over the link.
     * Used in the view as a handler of ng-mouseleave.
     * @param {string} id
     * @param {string} CSS value
     */    
    this.out = function(id, css)
    {        
        hover[id] = css;
    };
    
    /**
     * Send data to the browser console.
     */
    this.console = function()
    {
        console.log(hover);
    };    
});