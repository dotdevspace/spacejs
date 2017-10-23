"use strict";
var $SpaceIO = (function () {
    function $SpaceIO($params) {
    }
    return $SpaceIO;
}());
var $SpaceJS = (function () {
    function $SpaceJS() {
    }
    $SpaceJS.prototype.$io = function ($config) {
        return new $SpaceIO($config);
    };
    return $SpaceJS;
}());
var SpaceJS = new $SpaceJS();
