"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var $SpaceJS = (function () {
    function $SpaceJS() {
    }
    $SpaceJS.prototype.$io = function ($config) {
        return new $SpaceIO($config);
    };
    $SpaceJS.prototype.error = function ($description) {
        console.error("SpaceJS \u00BB " + $description);
    };
    return $SpaceJS;
}());
var $SpaceIO = (function (_super) {
    __extends($SpaceIO, _super);
    function $SpaceIO($params) {
        if ($params === void 0) { $params = {}; }
        var _this = _super.call(this) || this;
        _this.$default = {
            host: 'localhost',
            port: 3000
        };
        _this.$config = {};
        if (typeof io !== 'undefined') {
            _this.$config = Object.assign(_this.$default, $params);
        }
        else {
            _this.error('Socket.io is not defined');
        }
        return _this;
    }
    $SpaceIO.prototype.hello = function () {
        console.info(this.$config);
    };
    return $SpaceIO;
}($SpaceJS));
var SpaceJS = new $SpaceJS();
