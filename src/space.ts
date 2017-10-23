class $SpaceJS {

    public $io($config: object) {
        return new $SpaceIO($config)
    }

    error($description) {
        console.error(`SpaceJS » ${$description}`);
    }

}

class $SpaceIO extends $SpaceJS {
    $default: object = {
        host: 'localhost',
        port: 3000
    };

    $config: object = {};

    constructor($params: object = {}) {
        super();

        if (typeof io !== 'undefined') {
            this.$config = Object.assign(this.$default, $params);
        } else {
            this.error('Socket.io is not defined');
        }
    }

}

let SpaceJS = new $SpaceJS();