class $SpaceIO {
    constructor($params: object) {

    }


}

class $SpaceJS {

    public $io($config: object) {
        return new $SpaceIO($config)
    }

}

let SpaceJS = new $SpaceJS();