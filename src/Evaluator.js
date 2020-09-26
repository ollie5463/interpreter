export class Evaluator {
    constructor() {
        this.operators = {
            "+": (a, b) => {
                console.log('a: ', a)
                console.log('b: ', b)
                return a + b
            }
        }
    }
    evaluateExpression(AST) {
        let output = ''
        for (let i = 0; i < AST.length; i++){
            let value = this.parseNode(AST[i]);
            if (typeof value !== 'undefined') {
                output += value + '\n'
            }
        }
        return output;
    }
    parseNode(node) {
        if (node.type === 'number') {
            return Number(node.value);
        } else if(this.operators[node.type]) {
            if (node.left) {
                return this.operators[node.type](this.parseNode(node.left), this.parseNode(node.right));
            }
			return this.operators[node.type](this.parseNode(node.right));
        }
    }
}