import { PLUS, DIGIT } from './LexicalAnalyser';
import { Symbols } from './Symbols';

// export const parse = function (tokens) {
//     const symbolCreator = new Symbols();
//     const symbols = symbolCreator.symbols;

// 	var i = 0, token = function () { return symbolCreator.interpretToken(tokens[i]); };
// 	var advance = function () { i++; return token(); };

// 	var expression = function (rbp) {
// 		var left, t = token();
//         advance();
//         console.log('t: ', t);
//         console.log('proto: ', Object.getPrototypeOf(t));
// 		if (!t.nud) throw "Unexpected token: " + t.type;
// 		left = t.nud(t);
// 		while (rbp < token().lbp) {
// 			t = token();
// 			advance();
// 			if (!t.led) throw "Unexpected token: " + t.type;
// 			left = t.led(left);
// 		}
// 		return left;
// 	};

// 	var infix = function (id, lbp, rbp, led) {
// 		rbp = rbp || lbp;
// 		symbolCreator.createSymbol(id, null, lbp, led || function (left) {
// 			return {
// 				type: id,
// 				left: left,
// 				right: expression(rbp)
// 			};
// 		});
// 	}


// 	symbolCreator.createSymbol("(end)");

// 	symbolCreator.createSymbol('number', (number) => number);

// 	infix('+', 3);
// 	var parseTree = [];
// 	while (token().type !== "(end)") {
// 		parseTree.push(expression(0));
// 	}
// 	console.log('tree: ', parseTree)
// 	return parseTree;
	
// };
export const  parse = function (tokens) {
	var symbols = {},
	symbol = function (id, nud, lbp, led) {
		var sym = symbols[id] || {};
		symbols[id] = {
			lbp: sym.lbp || lbp,
			nud: sym.nud || nud,
			led: sym.lef || led
		};
	};

	var interpretToken = function (token) {
		var sym = Object.create(symbols[token.type]);
		sym.type = token.type;
		sym.value = token.value;
		return sym;
	};

	var i = 0, token = function () { return interpretToken(tokens[i]); };
	var advance = function () { i++; return token(); };

    const createAbstractSyntaxTree = (rbp = 0) => {
        // create AST
        let left, t = token();
        console.log('left: ', left);
        console.log('token: ', t)
		advance();
		if (!t.nud) throw "Unexpected token: " + t.type;
        left = t.nud(t);
        while (rbp < token().lbp) {
            t = token();
			advance();
            console.log('left: ', left);
            console.log('token: ', t)
			if (!t.led) throw "Unexpected token: " + t.type;
			left = t.led(left);
        }
        console.log('left: ', left);
		return left;
	};

	const operator = function (id, lbp, rbp, led) {
		rbp = rbp || lbp;
		symbol(id, null, lbp, led || function (left) {
			return {
				type: id,
				left: left,
				right: createAbstractSyntaxTree(rbp)
			};
		});
	}


	symbol("(end)");

	symbol('number', function (number) {
		return number;
	});

	operator('+', 3);
	var parseTree = [];
    while (token().type !== "(end)") {
        const node = createAbstractSyntaxTree();
        console.log('node: ', node)
		parseTree.push(node);
	}
	console.log('tree: ', parseTree)
	return parseTree;
	
};