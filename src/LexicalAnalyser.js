
export const OPERATOR = Symbol('OPERATOR');
export const DIGIT = Symbol('DIGIT');
export const WHITE_SPACE = Symbol('WHITE_SPACE');
export const IDENTIFIER = Symbol('IDENTIFIER');
export const PLUS = Symbol('+');


export class LexicalAnalyser {
    constructor() { 
        this.tokens = [];
    }

    /**
     * @public: Analyses the input string passed to it, apply a type and value to each token
     */
    getTokens(input) {
        this.tokens = [];
        for (let i = 0; i < input.length; i++){
            const character = input[i];
            const type = this.getType(character);
            if (type === WHITE_SPACE) {
                continue;
            } else if (type === OPERATOR) {
                this.tokens.push({
                    type: '+',
                    value: character
                })
             } else if (type === DIGIT) {
                let number = character;
                while (this.getType(input[i+1]) === DIGIT) {
                    number += input[++i]
                }
                this.tokens.push({ 
                    type: 'number',
                    value: number
                })
            }
        }
        this.tokens.push({type: '(end)', value: undefined})
        return this.tokens;
    }
    /**
     * @private: returns type of charater
     */
    getType(character) {
        if (/[0-9]/.test(character)) {
            return DIGIT;
        } else if (/\s/.test(character)){
            return WHITE_SPACE;
        } else if (/[+\-*\/\^%=(),]/.test(character)) {
            return OPERATOR;
        }
    }
}
