export class Symbols {

    /**
     * 
     * @param {array} symbolsToCreate: 2d array => [[],[],[]]
     * @param {arrays} operatorsToCreate: 2d array => [[],[],[]]
     */

    constructor(symbolsToCreate, operatorsToCreate) {
        this.symbols = {};
        for (const item of symbolsToCreate) {
            this.createSymbol(...item);
        }
        for (const item of operatorsToCreate) {
            this.createOperator(...item);
        }
    }

    createSymbol(id, nud, lbp, led) {
		const sym = this.symbols[id] || {};
		this.symbols[id] = {
			lbp: sym.lbp || lbp,
			nud: sym.nud || nud,
			led: sym.lef || led
		}
    }
    
    createOperator(id, lbp, rbp, led, rightFunction) {
        rbp = rbp || lbp;
		this.createSymbol(id, null, lbp, led || function (left) {
			return {
				type: id,
				left: left,
				right: rightFunction(rbp)
			};
		});
    }
}