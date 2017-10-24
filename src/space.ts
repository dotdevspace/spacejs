class $SpaceJS {

    public $io($config: object) {
        return new $SpaceIO($config)
    }

    private error($description) {
        console.error(`SpaceJS » ${$description}`);
    }

}

class $SpaceIO extends $SpaceJS {
    private $config: object = {
        host: 'localhost',
        port: 3000,
        namespace: '.devSPACE',
        debug: false,
        join: 'global'
    };

    private $_io = null;

    constructor($params: object = {}) {
        super();

        if (typeof io !== 'undefined') {
            this.$config = (<any>Object).assign(this.$config, $params);

            this.$_io = io.connect(`${this.$config.host}:${this.$config.port}`);

            this.setDebug(this.$config.debug);
            this.setNamespace(this.$config.namespace);
            this.setJoinId(this.$config.join);
        } else {
            this.error('Socket.io is not defined, require socket.io-client. Download https://cdnjs.com/libraries/socket.io');
        }
    }

    private debug($description) {
        if (this.$config.debug) {
            console.info(`SpaceJS » ${$description}`);
        }
    }

    public getNamespace() {
        return this.$config.namespace;
    }

    public setNamespace($namespace: string) {
        this.$config.namespace = $namespace;
        this.debug(`Namespace is change to ${this.getNamespace()}`);
    }

    public getJoinId() {
        this.$config.join;
    }

    public setJoinId($join: string) {
        this.$config.join = $join;
        this.debug(`Join ${this.getJoinId()}`);
    }

    private setDebug($debug: boolean) {
        this.$config.debug = $debug;
    }

    private _on($where: string = '', $function) {
        this.$_io.on(`${this.getNamespace()} ${$where}`, function ($socket) {
            $function($socket);
        });

        return this;
    }

    public room() {
        return {
            emit($where, $data) {
                return this._emit(`room`, `${this.getJoinId()} ${$where}`, $data);
            },
            on($where, $function) {
                return this._on(`${this.getJoinId()} ${$where}`, $function);
            }
        };
    }

    private _emit($namepaceEmit, $where: string = '', $data: object) {
        const $dataEmit = {
            namespace: `${this.getNamespace()} ${$where}`,
            data: $data
        };

        this.$_io.emit(`${this.getNamespace()} ${$namepaceEmit}`, $dataEmit);

        return this;
    }

    public me() {
        return {
            on($where, $function) {
                return this._on($where, $function);
            },
            emit($where, $data) {
                return this._emit(`me`, $where, $data);
            }
        };
    }

}

let SpaceJS = new $SpaceJS();