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
var $SpaceJS = /** @class */ (function () {
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
var $SpaceIO = /** @class */ (function (_super) {
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
            _this.setDebug(_this.$config.debug);
            _this.setNamespace(_this.$config.namespace);
            _this.setJoinId(_this.$config.join);
        }
        else {
            _this.error('Socket.io is not defined, require socket.io-client. Download https://cdnjs.com/libraries/socket.io');
        }
        return _this;
    }
    $SpaceIO.prototype.debug = function ($description) {
        if (this.$config.debug) {
            console.info("SpaceJS \u00BB " + $description);
        }
    };
    $SpaceIO.prototype.getNamespace = function () {
        return this.$config.namespace;
    };
    $SpaceIO.prototype.setNamespace = function ($namespace) {
        this.$config.namespace = $namespace;
        this.debug("Namespace is change to " + this.getNamespace());
    };
    $SpaceIO.prototype.getJoinId = function () {
        this.$config.join;
    };
    $SpaceIO.prototype.setJoinId = function ($join) {
        this.$config.join = $join;
        this.debug("Join " + this.getJoinId());
    };
    $SpaceIO.prototype.setDebug = function ($debug) {
        this.$config.debug = $debug;
    };
    $SpaceIO.prototype._on = function ($where, $function) {
        if ($where === void 0) { $where = ''; }
        this.$_io.on(this.getNamespace() + " " + $where, function ($socket) {
            $function($socket);
        });
        return this;
    };
    $SpaceIO.prototype.room = function () {
        return {
            emit: function ($where, $data) {
                return this._emit("room", this.getJoinId() + " " + $where, $data);
            },
            on: function ($where, $function) {
                return this._on(this.getJoinId() + " " + $where, $function);
            }
        };
    };
    $SpaceIO.prototype._emit = function ($namepaceEmit, $where, $data) {
        if ($where === void 0) { $where = ''; }
        var $dataEmit = {
            namespace: this.getNamespace() + " " + $where,
            data: $data
        };
        this.$_io.emit(this.getNamespace() + " " + $namepaceEmit, $dataEmit);
        return this;
    };
    $SpaceIO.prototype.me = function () {
        return {
            on: function ($where, $function) {
                return this._on($where, $function);
            },
            emit: function ($where, $data) {
                return this._emit("me", $where, $data);
            }
        };
    };
    return $SpaceIO;
}($SpaceJS));
var SpaceJS = new $SpaceJS();
