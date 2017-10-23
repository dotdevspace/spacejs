class $SpaceJS {

    public $io($config: object) {
        return new $SpaceIO($config)
    }

    error($description) {
        console.error(`SpaceJS » ${$description}`);
    }

}

class $SpaceIO extends $SpaceJS {
    $config: object = {
        host: 'localhost',
        port: 3000,
        namespace: '.devSPACE',
        debug: false,
        join: 'global'
    };

    $_io = null;

    constructor($params: object = {}) {
        super();

        if (typeof io !== 'undefined') {
            this.$config = (<any>Object).assign(this.$config, $params);

            this.$_io = io.connect(`${this.$config.host}:${this.$config.port}`);
        } else {
            this.error('Socket.io is not defined, require socket.io-client. Download https://cdnjs.com/libraries/socket.io');
        }
    }

}

let SpaceJS = new $SpaceJS();