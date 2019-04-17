export class Asset {
    _location: String;
    _value: Number;

    get location(): String {
        return this._location;
    }

    set location(location: String) {
        this._location = location;
    }

    get value(): Number {
        return this._value;
    }

    set value(value: Number) {
        this._value = value;
    }

    public static instance(): Asset {
        return new Asset();
    }

    withLocation(location: String): Asset {
        this._location = location;
        return this;
    }

    withValue(value: Number): Asset {
        this._value = value;
        return this;
    }
}
