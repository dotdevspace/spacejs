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
    }

    public getJoinId() {
        this.$config.join;
    }

    public setJoinId($join: string) {
        this.$config.join = $join;
        this.debug(`Join ${this.getJoinId()}`);
    }

}

let SpaceJS = new $SpaceJS();