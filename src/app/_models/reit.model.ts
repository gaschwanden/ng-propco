import { Asset } from './asset.model';

export class Reit {
    _assets = new Array<Asset>();
    _revenue: Number;
    _expense: Number;
    _address: String;

    get revenue(): Number {
        return this._revenue;
    }

    get address(): String {
        return this._address;
    }

    set address(address: String) {
        this._address = address;
    }

    set revenue(pRevenue: Number) {
        this._revenue = pRevenue;
    }

    get expense(): Number {
        return this._expense;
    }

    set expense(pExpense: Number) {
        this._expense = pExpense;
    }

    public static instance(): Reit {
        return new Reit();
    }

    withRevenue(revenue: Number): Reit {
        this._revenue = revenue;
        return this;
    }

    withExpense(expense: Number): Reit {
        this._expense = expense;
        return this;
    }

    withAsset(asset: Asset): Reit {
        this._assets.push(asset);
        return this;
    }
}
