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
        _this.$config = {
            host: 'localhost',
            port: 3000,
            namespace: '.devSPACE',
            debug: false,
            join: 'global'
        };
        _this.$_io = null;
        if (typeof io !== 'undefined') {
            _this.$config = Object.assign(_this.$config, $params);
            _this.$_io = io.connect(_this.$config.host + ":" + _this.$config.port);
        }
        else {
            _this.error('Socket.io is not defined, require socket.io-client. Download https://cdnjs.com/libraries/socket.io');
        }
        return _this;
    }
    $SpaceIO.prototype.getNamespace = function () {
        return this.$config.namespace;
    };
    $SpaceIO.prototype.setNamespace = function ($namespace) {
        this.$config.namespace = $namespace;
    };
    return $SpaceIO;
}($SpaceJS));
var SpaceJS = new $SpaceJS();
