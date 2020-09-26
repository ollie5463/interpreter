
const OPERATOR = Symbol('OPERATOR');
const DIGIT = Symbol('DIGIT');
const WHITE_SPACE = Symbol('WHITE_SPACE');
const IDENTIFIER = Symbol('IDENTIFIER');


export class LexicalAnalyser {
    constructor() { 
        this.tokens = [];
    }

    /**
     * @public 
     */
    getTokens(input) {
        for (let i = 0; i < input.length; i++){
            const character = input[i];
            const type = this.getType(character);
            if (type === WHITE_SPACE) {
                continue;
            } else if (type === DIGIT) {
                let number = character;
                while (this.getType(input[i+1]) === DIGIT) {
                    number += input[++i]
                }
                this.tokens.push({ 
                    type: DIGIT,
                    value: number
                })
            }
        }
        console.log('tokens: ', this.tokens);
        // }
    }
    /**
     * @private 
     */
    getType(input) {
        if (/[0-9]/.test(input)) {
            return DIGIT;
        }
    }
}
