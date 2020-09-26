export class Symbols {
    constructor() {
        this.symbols = [];
    }

    createSymbol(id, nud, leftBindingPower, led) {
        const sym = this.symbols[id] || {};
        this.symbols[id] = {
            leftBindingPower: sym.leftBindingPower || leftBindingPower,
            nud: sym.nud || nud,
            led: sym.lef || led
        }
    }
}