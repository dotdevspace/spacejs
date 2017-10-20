import $SpaceIO from './space.io'

class SpaceJS {

    public $io($config: object) {
        return new $SpaceIO($config)
    }

}