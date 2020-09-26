import { Symbols } from './Symbols';

export const parse = function (tokens) {
    
	const interpretToken = function (token) {
        var sym = Object.create(symbols[token.type]);
		sym.type = token.type;
		sym.value = token.value;
		return sym;
	};
    
	let i = 0, token = function () { return interpretToken(tokens[i]); };
	const advance = function () { i++; return token(); };
    
    const createAbstractSyntaxTree = (rbp = 0) => {
        // create AST
        let left, t = token();
		advance();
		if (!t.nud) throw "Unexpected token: " + t.type;
        left = t.nud(t);
        while (rbp < token().lbp) {
            t = token();
			advance();
			if (!t.led) throw "Unexpected token: " + t.type;
			left = t.led(left);
        }
		return left;
	};
    const symbolCreator = new Symbols([
        ['(end)'],
        ['number', (number) => number]],
        [['+', 3, undefined, undefined, createAbstractSyntaxTree]
    ])
    const symbols = symbolCreator.symbols;
	const parseTree = [];
    while (token().type !== "(end)") {
        const node = createAbstractSyntaxTree();
		parseTree.push(node);
	}
	return parseTree;
	
};